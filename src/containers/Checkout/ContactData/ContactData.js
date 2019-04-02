import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      zipCode: ""
    },
    isLoading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ isLoading: true });

    const orderInfo = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Jason Kim",
        address: {
          street: "123 Burger Ln",
          zipCode: "12345",
          country: "USA"
        },
        email: "iLikeBurgers@burgerMail.com",
      },
      deliveryMethod: "express" // standard, express, prime 

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
    let form = (
      <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your email" />
          <input className={classes.Input} type="text" name="street" placeholder="Enter street" />
          <input className={classes.Input} type="text" name="zip" placeholder="Enter zip code" />
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