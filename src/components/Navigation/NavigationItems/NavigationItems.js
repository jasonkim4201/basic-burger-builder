import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact> Burger Builder </NavigationItem> {/* since active is a boolean value no need to add a value */}
    <NavigationItem link="/orders"> Orders </NavigationItem>
  </ul>
);

export default NavigationItems;