import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Auth.module.css";
import * as actions from "../../store/actions/";


class Auth extends Component {
  // manage state through here instead of redux
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
    },
    isSignUp: true
  }

  componentDidMount() {
    if (!this.props.isBuilding && this.props.authRedirectPath !== "/") {
      this.props.onSetAuthRedirectPath();
    }
  }

  // checking the validity of the form inputs
  checkValidity(value, rules) {
    let isValid = true;

    // write validation rules here which will determine if isValid will return true. 

    if (rules.required) { // && isValid added to ensure that all checks must result in true before isValid returns true
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.isNum) {
      const stupidRegexCheck = /^\d+$/; // this is the way to check is stuff is a number
      isValid = stupidRegexCheck.test(value.trim()) && isValid;
    }
    if (rules.isEmail) {
      const stupidEmailRegexCheck = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; // the really long string that checks for email validation. i really need to save these somewhere
      isValid = stupidEmailRegexCheck.test(value.trim()) && isValid;
    }
    return isValid;

  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };

    this.setState({ controls: updatedControls });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    // onAuth needs the email and password

    this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignUp: !prevState.isSignUp };
    })
  }

  render() {
    // similar process to contact data container
    const formElementsArray = [];
    for (let key in this.state.controls) { //key is name, address, etc...
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }
    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.elementConfig.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
    ));

    if (this.props.isLoading) {
      form = <Spinner />
    }

    let errorMessage = null;

    if (this.props.error) {
      console.log(this.props.error.message)
      switch (this.props.error.message) {
        case "INVALID_EMAIL": errorMessage = <p>Please use a valid email.</p>
          break;
        case "EMAIL_EXISTS": errorMessage = <p>Email already exists.</p>
          break;
        case "MISSING_PASSWORD": errorMessage = <p>Please include a password.</p>
          break;
        case "WEAK_PASSWORD : Password should be at least 6 characters": errorMessage = <p>Password should be at least 6 characters.</p>
          break;        
        case "USER_DISABLED": errorMessage = <p>Your account has been suspensed. Please contact the administrator</p>
          break;
        default: alert(this.props.error.message);
          break;
      }

    }

    const style = {
      fontWeight: "bold",
      color: "red"
    }

    const formEnterBtn = this.state.isSignUp 
                        ? <Button btnType="Success">REGISTER</Button>
                        : <Button btnType="Success">CONTINUE</Button>;
    // after clicking on continue have it redirect to main page. need to bring in props for authentication too
    let authRedirect = null; 
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }
    
    return (
      <div className={classes.Auth}>
        <h2>{this.state.isSignUp ? "Register account" : "Sign in"}</h2>
        {authRedirect}
        <div style={style}>{errorMessage}</div>
        <form onSubmit={this.handleFormSubmit}>
          {form}
          {formEnterBtn}
        </form>
        <Button
          clicked={this.switchAuthModeHandler}
          btnType="Danger">SWITCH TO {this.state.isSignUp ? "SIGN IN" : "REGISTER"}</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.loading, //becase rootReducer which leads to auth in reducers folder
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    isBuilding: state.burgerBuilder.isBuilding,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/"))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);