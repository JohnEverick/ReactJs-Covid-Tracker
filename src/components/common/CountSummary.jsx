import React from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBRow } from "mdbreact";

class CountSummary extends React.Component {
  render() {
    return (
      <>
        <MDBRow className="p-2">
          <MDBCard className="col-md-2 mx-2">
            <MDBCardBody>
              <strong>Total Confirmed:</strong>
              <MDBCardText>
                {this.props.confirmed &&
                  this.props.confirmed.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="col-md-2 mx-2">
            <MDBCardBody>
              <strong>Active:</strong>
              <MDBCardText>
                {this.props.active &&
                  this.props.active.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="col-md-2 mx-2">
            <MDBCardBody>
              <strong>Recovered:</strong>
              <MDBCardText>
                {this.props.recovered &&
                  this.props.recovered.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="col-md-2 mx-2">
            <MDBCardBody>
              <strong>Deaths:</strong>
              <MDBCardText>
                {this.props.deaths &&
                  this.props.deaths.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </>
    );
  }
}

export default CountSummary;
