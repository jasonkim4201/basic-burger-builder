import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
        street: "",
        zipCode: ""
    }
  }

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Please enter your contact info</h4>
        <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
            <input className={classes.Input} type="email" name="email" placeholder="Your email"/>
            <input className={classes.Input} type="text" name="street" placeholder="Enter street"/>
            <input className={classes.Input} type="text" name="zip" placeholder="Enter zip code"/>
            <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;