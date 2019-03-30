import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active> Burger Builder </NavigationItem> {/* since active is a boolean value no need to add a value */}
    <NavigationItem link="/"> Checkout </NavigationItem>
  </ul>
);

export default NavigationItems;