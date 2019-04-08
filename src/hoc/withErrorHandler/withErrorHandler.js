import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";
import burgerGuard from "../../assets/images/burger-guard.png";
/* takes WrappedComponet as arguement and returns function which recieves props then returns the wrapped component and distribute any received props */

/* woah an anonymous class! */
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null }
    //set up a global axios interceptor which will allow us to handle errors

    reqInterceptor = axios.interceptors.request.use(req => {
      this.setState({ error: null });
      return req; //return request config so request can continue
    });

    //response handler where response is returned
    resInterceptor = axios.interceptors.response.use(res => res, error => {
      this.setState({ error: error });
    });

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      const style = {
        textAlign: "center"
      }

      let unauthorizedEntry = null;


      if (this.state.error) {
        // TODO: maybe make a custom thing for each type of error like one for NETWORK ERROR
        if (this.state.error.message === "Request failed with status code 401") {
          unauthorizedEntry = (
            <Auxiliary>
              <hr />
              <img src={burgerGuard} alt="burger guard" />
              <strong><h3>UNAUTHORIZED ACCESS</h3></strong>
            </Auxiliary>
          );
        }
      }

      return (
        /* firebase will have a message property for errors */
        <Auxiliary>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            <div style={style}>
              {this.state.error && this.state.error.message}
              {unauthorizedEntry}
            </div>
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      )
    }
  }
}

export default withErrorHandler;