import { GET_GLOBAL_COUNTS } from "./actionTypes";
import * as moment from "moment";

const initialState = {
  // intialize common data
  casesPerCountry: [],
  totalConfirmed: [],
  totalDeaths: [],
  totalRecovered: [],
  totalActive: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GLOBAL_COUNTS: {
      const { dailyData } = action.payload;
      let rawData = dailyData.csvRow.map((record) => {
        return {
          country: record[3],
          lastUpdate: moment(record[4]).format("MMMM DD, YYYY h:mm a"),
          confirmed: record[7],
          deaths: record[8],
          recovered: record[9],
          active: record[10],
        };
      });

      // To summarize countries separated by state
      var casesPerCountry = [];
      var totalConfirmed = 0;
      var totalDeaths = 0;
      var totalRecovered = 0;
      var totalActive = 0;

      rawData.forEach((element) => {
        totalConfirmed = parseInt(totalConfirmed) + parseInt(element.confirmed);
        totalDeaths = parseInt(totalDeaths) + parseInt(element.deaths);
        totalRecovered = parseInt(totalRecovered) + parseInt(element.recovered);
        totalActive = parseInt(totalActive) + parseInt(element.active);

        if (
          casesPerCountry.some((record) => record.country === element.country)
        ) {
          var index = casesPerCountry.findIndex(
            (record) => record.country === element.country
          );
          casesPerCountry[index].confirmed =
            parseInt(casesPerCountry[index].confirmed) +
            parseInt(element.confirmed);
        } else {
          casesPerCountry.push(element);
        }
      });

      return {
        ...state,
        casesPerCountry: casesPerCountry.sort((a, b) =>
          a.country > b.country ? 1 : -1
        ),
        totalConfirmed,
        totalDeaths,
        totalRecovered,
        totalActive,
      };
    }

    default:
      return state;
  }
}
