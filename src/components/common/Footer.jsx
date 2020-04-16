import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import * as Constants from "../constants/constants";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <MDBFooter color={Constants.THEME_COLOR} className="font-small mt-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a target="blank" href="https://www.github.com/JohnEverick">
                {" "}
                JE.Catayas{" "}
              </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </>
    );
  }
}

export default Navbar;
