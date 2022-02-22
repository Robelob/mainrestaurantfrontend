import React, { Component, Fragment } from "react";
import "./about.css";
import landing from "../../img/landing.jpg";
import aboutImg from "../../img/about-img.jpg";

class About extends Component {
  render() {
    return (
      <Fragment>
        <header
          className="about landing-sub"
          style={{ backgroundImage: `url(${landing})` }}
        >
          <h1>the restaurant site</h1>
          <h4> we make everything easy for experiance </h4>
        </header>
        <section className="about-section">
          <div>
            <h1>Group members.</h1>
            <p className="font-weight-bold">Robel Kebede</p>
            <p className="font-weight-bold">Bewnet Alemu</p>
            <p>Beza</p>
            <p>Dorota</p>
            <p>Tirsit</p>
          </div>
          <img src={aboutImg} alt="ph" />
        </section>
      </Fragment>
    );
  }
}

export default About;
