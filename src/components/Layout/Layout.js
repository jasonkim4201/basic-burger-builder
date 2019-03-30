import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/Sidedrawer/SideDrawer";



const Layout = (props) => {
  return (
    // wrap everyting around a higher order component
    <Auxiliary>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxiliary>
  )
}

export default Layout;