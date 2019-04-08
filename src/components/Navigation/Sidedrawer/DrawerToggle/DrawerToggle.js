import React from "react";
import classes from  "./DrawerToggle.module.css";

// hamburger menu 
const DrawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;