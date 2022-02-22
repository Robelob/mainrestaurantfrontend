import React, { Component, Fragment } from "react";
import "../contacts/contacts.css";
import landing from "../../img/landing.jpg";
import ContactForm from "../../components/contact-form/ContactForm.js";

class Order extends Component {
  render() {
    return (
      <Fragment>
        <header
          className="contacts landing-sub"
          style={{ backgroundImage: `url(${landing})` }}
        >
          <h1>Order now</h1>
          <h4>We know you're hungry.</h4>
        </header>
        <section className="contact-us">
          <div>
            <h1>Stand by your phone.</h1>
            <p>Just Call not abig deal</p>
          </div>
          <ContactForm />
        </section>
      </Fragment>
    );
  }
}

export default Order;
