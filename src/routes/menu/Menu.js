import React, { Component, Fragment } from "react";
import "./menu.css";
import landing from "../../img/landing.jpg";

import { useEffect, useState } from "react";
import MenuItem from "../../components/menu-item/MenuItem.js";

const Menu = () => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fethData();
  }, []);

  const fethData = async () => {
    let response = await fetch("http://localhost:3003/blogpost");
    let data = await response.json();
    setFood(data);
  };

  const menuItems = food.map((e, i) => (
    <MenuItem className="car-image" key={e.name} {...e} />
  ));
  return (
    <Fragment>
      <header
        className="landing-sub"
        style={{ backgroundImage: `url(${landing})` }}
      >
        <h1>Menu</h1>
        <h4>Get a taste of traditional home cooking.</h4>
      </header>
      <section className="menu-section">
        <div className="menu-items-container">{menuItems}</div>
      </section>
    </Fragment>
  );
};

export default Menu;
