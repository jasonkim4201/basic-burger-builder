import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";



const Layout = (props) => {
  return (
    // wrap everyting around a higher order component
    <Auxiliary>
      <div>Toolbar, sidedrawer, backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxiliary>
  )
}

export default Layout;