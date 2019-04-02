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
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: ""
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zipcode"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: ""
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
        value: ""
      }
    },
    isLoading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ isLoading: true });

    const orderInfo = {
      ingredients: this.props.ingredients,
      price: this.props.price
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
      <form>  {/* loop through form elements array with .map*/}
          {formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.elementConfig.value} />
          ))}
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
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