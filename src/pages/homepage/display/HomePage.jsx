import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import CountSummary from "../../../components/common/CountSummary";
import CountryDataTable from "../../../components/common/CountryDataTable";
import * as API from "../../../components/Api/GetGobalCounts";
import * as Constants from "../../../components/constants/constants";
import { connect } from "react-redux";
import { getCountryCounts } from "../actions";

class HomePage extends React.Component {
  componentDidMount() {
    API.getRecords().then((response) => {
      const csv = require("csvtojson");
      csv({
        noheader: false,
        output: "csv",
      })
        .fromString(response)
        .then((csvRow) => {
          this.props.getCountryCounts({ csvRow });
        });
    });

    API.getTimeSeriesConfirmed().then((response) => {
      const csv = require("csvtojson");
      csv({
        noheader: false,
        output: "csv",
      })
        .fromString(response)
        .then((csvRow) => {
          console.log(csvRow);
          // this.props.getTimeSeriesConfirmedCounts({ csvRow });
        });
    });
  }

  render() {
    return (
      <>
        <Navbar active={Constants.GLOBAL_PAGE} />
        <CountSummary
          confirmed={this.props.totalConfirmed}
          recovered={this.props.totalRecovered}
          active={this.props.totalActive}
          deaths={this.props.totalDeaths}
        />
        <CountryDataTable />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state.homepage;
};
export default connect(mapStateToProps, { getCountryCounts })(HomePage);
// export default HomePage;
