import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/Sidedrawer/SideDrawer";



class Layout extends Component {
  // state will determine if sideDrawer is visible or not
  state = {
    showSideDrawer: false
  }
  
  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    /* toggle state right here by setting to opposite*/
    this.setState((prevState) => {
        return { showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render() {
    return (
      // wrap everyting around a higher order component
      <Auxiliary>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          isAuth={this.props.isAuthenticated} 
          open={this.state.showSideDrawer} 
          closed={this.SideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxiliary>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);