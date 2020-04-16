import React from "react";
import { MDBDataTable } from "mdbreact";

import { connect } from "react-redux";

const columns = [
  {
    label: "Country",
    field: "country",
    sort: "asc",
    width: 270,
  },
  {
    label: "Confirmed",
    field: "confirmed",
    sort: "asc",
    width: 100,
  },
  {
    label: "Deaths",
    field: "deaths",
    sort: "asc",
    width: 150,
  },
  {
    label: "Recovered",
    field: "recovered",
    sort: "asc",
    width: 100,
  },
  {
    label: "Active",
    field: "active",
    sort: "asc",
    width: 100,
  },
  {
    label: "Last Updated",
    field: "lastUpdate",
    sort: "asc",
    width: 200,
  },
];

class DataTable extends React.Component {
  render() {
    return (
      <>
        <MDBDataTable
          striped
          bordered
          hover
          data={{
            columns: columns,
            rows: this.props.casesPerCountry
              ? this.props.casesPerCountry.map((record) => {
                  return {
                    country: record.country,
                    lastUpdate: record.lastUpdate,
                    confirmed: record.confirmed
                      ? record.confirmed.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })
                      : "",
                    deaths: record.deaths
                      ? record.deaths.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })
                      : "",
                    recovered: record.recovered
                      ? record.recovered.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })
                      : "",
                    active: record.active
                      ? record.active.toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })
                      : "",
                  };
                })
              : this.props.casesPerCountry,
          }}
          className="mx-4 mb-5"
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state.homepage;
};
export default connect(mapStateToProps)(DataTable);
// export default DataTable;
