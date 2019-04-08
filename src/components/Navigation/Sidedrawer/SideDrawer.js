import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return(
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(" ")}>
      <Logo height="11%" marginBottom="32px"/> {/* passing inline styling params as a prop! */}
      <nav>
        <NavigationItems isAuthenticated={props.isAuth}/>
      </nav>
    </div>
    </Auxiliary>
  )
}

export default SideDrawer;