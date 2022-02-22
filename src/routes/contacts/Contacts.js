import React, { Component, Fragment } from "react";
import "./contacts.css";
import landing from "../../img/landing.jpg";
import ContactForm from "../../components/contact-form/ContactForm.js";

class Contacts extends Component {
  render() {
    return (
      <Fragment>
        <header
          className="contacts landing-sub"
          style={{ backgroundImage: `url(${landing})` }}
        >
          <h1>We Don't Bite</h1>
          <h4>Talk to us.</h4>
        </header>
        <section className="contact-us">
          <div>
            <h1>Reach us.</h1>
            <p>
              We would love to hear what you have to say about our food and
              service. Help us improve by letting us know what you think.
            </p>
          </div>
          <ContactForm isContacts={true} />
        </section>
      </Fragment>
    );
  }
}

export default Contacts;
