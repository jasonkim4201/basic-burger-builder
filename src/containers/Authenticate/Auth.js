import React, {Component} from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";

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

    this.setState({controls: updatedControls});
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
    const form = formElementsArray.map(formElement => (
      <Input 
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.elementConfig.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
    ));

    return (
      <div className={classes.Auth}>
        <form>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
      </div>
    )
  }
}

export default Auth;