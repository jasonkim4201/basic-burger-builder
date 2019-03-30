import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/Sidedrawer/SideDrawer";



class Layout extends Component {
  // state will determine if sideDrawer is visible or not
  state = {
    showSideDrawer: true
  }
  
  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false});
  }

  render() {
    return (
      // wrap everyting around a higher order component
      <Auxiliary>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }
}

export default Layout;