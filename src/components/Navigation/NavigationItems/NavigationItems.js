import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact> Burger Builder </NavigationItem> {/* since active is a boolean value no need to add a value */}
    {props.isAuthenticated && <NavigationItem link="/orders"> Orders </NavigationItem>}
    {!props.isAuthenticated 
      ? <NavigationItem link="/sign-in">Sign in</NavigationItem>
      : <NavigationItem link="/logout">Logout</NavigationItem>}
  </ul>
);

export default NavigationItems;