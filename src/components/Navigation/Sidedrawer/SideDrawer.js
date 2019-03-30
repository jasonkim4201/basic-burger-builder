import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  
  return(
    <div className={classes.SideDrawer}>
      <Logo height="11%" marginBottom="32px"/> {/* passing inline styling params as a prop! */}
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
}

export default SideDrawer;