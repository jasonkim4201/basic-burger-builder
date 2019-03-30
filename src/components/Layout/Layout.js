import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";



const Layout = (props) => {
  return (
    // wrap everyting around a higher order component
    <Auxiliary>
      <Toolbar />
      <div>Toolbar, sidedrawer</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxiliary>
  )
}

export default Layout;