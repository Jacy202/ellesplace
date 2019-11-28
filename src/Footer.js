import React, { Component } from "react";
import headStyles from "./footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={headStyles.footerContainer}>
        <div className={headStyles.footerContainer2}>
          <h2>EllesPlace:Your no 1 Female tech hub center</h2>
          <p>
            EllesPlace is a digital/tech hub for females who wants to carve a
            niche for themselves in the tech eco system. The company was founded
            on the need for social enterprise for women in tech especially for
            those in south eastern part of Nigeria.
          </p>
        </div>
      </div>
    );
  }
}
export default Footer;
