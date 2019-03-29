import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  lettuce: 0.25,
  bacon: 0.75, /* fancy bacon okay */
  cheese: 0.5,
  meat: 1.25
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
        bacon: 0,
        lettuce: 0,
        cheese: 0,
        meat: 0,
        
    },
    totalPrice: 5 //yea ur gonna pay a premium on this burger
  }

  // add handlers to add and remove ingredients
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const  updatedCount = oldCount + 1;

    // create variable for updated ingredients use spread operator to distribute props of old ingredients state into the new object
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    // prices will depend on ingredient prices for a given type + base price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
  }

  removeIngredientHandler = (type) => {

  }

  render() {
    return (
      <Auxiliary>
        <Burger  ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={"add remove handler function l8r"}  
        />
      </Auxiliary>
    )
  }
}

export default BurgerBuilder; 