import * as Constants from "../constants/constants";
import Axios from "axios";
import * as moment from "moment";

export async function getRecords() {
  let response;
  var errorFlag = false;

  await Axios.get(
    Constants.REPOSITORY_URL +
      moment().utc().subtract(1, "day").format("MM-DD-YYYY") +
      ".csv"
  )
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      console.log(
        moment().utc().subtract(1, "day").format("MM-DD-YYYY") +
          ".csv" +
          " records not found."
      );
      errorFlag = true;
    });

  if (errorFlag) {
    await Axios.get(
      Constants.REPOSITORY_URL +
        moment().utc().subtract(2, "day").format("MM-DD-YYYY") +
        ".csv"
    )
      .then((result) => {
        response = result;
      })
      .catch(() => {
        console.log(
          moment().utc().format("MM-DD-YYYY") + " records not found."
        );
      });
  }

  return response.data;
}

export async function getTimeSeriesConfirmed() {
  let response;
  await Axios.get(Constants.TIMESERIES_CONFIRMED_URL)
    .then((result) => {
      response = result.data;
    })
    .catch((error) => {
      console.log("Time-Series-Confirmed-Error: " + error);
    });
  return response;
}
