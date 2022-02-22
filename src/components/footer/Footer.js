import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <div className="company-info"></div>
          <div className="footer-navlinks">
            <p>
              <Link to="/home">Home</Link>
            </p>
            <p>
              <Link to="/menu">Menu</Link>
            </p>

            <p>
              <Link to="/contacts">Contact</Link>
            </p>
          </div>
          <div className="dev-info">
            <p>
              Photos were taken from{" "}
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
              ,{" "}
              <a
                href="https://www.pexels.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pexels
              </a>{" "}
              and{" "}
              <a
                href="https://pixabay.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
