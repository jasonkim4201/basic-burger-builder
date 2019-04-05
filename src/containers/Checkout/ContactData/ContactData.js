import React, { Component } from "react";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler"
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import * as actions from "../../../store/actions/";

class ContactData extends Component {
  state = {
    orderForm : {
      name: {
        elementType: "input",
        elementConfig: {
            type: "text",
            placeholder: "Your name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zipcode"
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNum: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
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
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            {value: "standard", displayValue: "Standard"},
            {value: "express", displayValue: "Express"},
            {value: "prime", displayValue: "Prime"},
          ]
        },
        value: "standard",
        validation: {},
        valid: true 
      }
    },
    formIsValid: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    //console.log(this.props.ings);
    const formData = {}
    // form element identifier is email, address, etc..
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }

    const orderInfo = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData
    }
    this.props.onOrderBurger(orderInfo);
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
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
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

  inputChangedHandler = (event, inputIdentifier) => {
    //console.log(event.target.value);
    const updatedOrderForm = {
      // use spread operator to copy orderForm from state
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    //console.log(updatedFormElement);

    let formIsValid = true;
    // make a for in loop to go through all elements and check all inputs for validity
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
    }
    //console.log(formIsValid);
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});

  }

  render() {
    // turn order form object into array with for in loop.
    const formElementsArray = [];
    for (let key in this.state.orderForm) { //key is name, address, etc...
        formElementsArray.push({
          id: key,
          config: this.state.orderForm[key]
        })
    }

    let form = (
      <form onSubmit={this.orderHandler}>  {/* loop through form elements array with .map*/}
          {formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.elementConfig.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />
          ))}
          <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
        </form>
    );

    if (this.props.isLoading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Please enter your contact info</h4>
        {form}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    isLoading: state.burgerBuilder.isLoading
  }
};

// dispatch orders
const mapDispatchToProps = dispatch => {
  return {
  onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));