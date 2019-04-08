import React, { Component } from "react";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler"
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import * as actions from "../../../store/actions/";
import { updateObject, checkValidity } from "../../../shared/utility";

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
      orderData: formData,
      userId: this.props.userId
    }
    this.props.onOrderBurger(orderInfo, this.props.token);
  }

  inputChangedHandler = (event, inputIdentifier) => {
    //console.log(event.target.value);
    const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
      touched: true
    }); 
    const updatedOrderForm = updateObject(this.state.orderForm, {
      [inputIdentifier]: updatedFormElement
    })
  
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
    isLoading: state.burgerBuilder.isLoading,
    token: state.auth.token,
    userId: state.auth.userId
  }
};

// dispatch orders
const mapDispatchToProps = dispatch => {
  return {
  onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));