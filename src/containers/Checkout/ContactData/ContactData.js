import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

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
          required: true
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
    formIsValid: false,
    isLoading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    const formData = {}
    // form element identifier is email, address, etc..
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }

    this.setState({ isLoading: true });

    const orderInfo = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }

    axios.post("/orders.json", orderInfo)
      .then(response => {
        this.setState({ isLoading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log(error);
      });

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
      // will be valid if is NOT not a number is true. yeah i know...weird 
      isValid = !isNaN(value.trim()) === rules.isNum && isValid;
    }
    // reminder to put in a rule validation with the regex stuff for proper email params too
    console.log(`reminder to yourself that you should implement a rule to validate email.`)
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

    if (this.state.isLoading) {
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

export default ContactData;