import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

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
    totalPrice: 5, //yea ur gonna pay a premium on this burger
    purchaseable: false, //switches to true once there's at least one other ingredient on the burger
    purchasing: false, //set to true once proceed to checkout button clicked
    isLoading: false
  }

  updatePurchaseState = (ingredients) => {
      
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
      
      const sum = Object.keys(ingredients).map(ingredientKey => {
          /* console.log(ingredientKey);
          console.log(ingredients[ingredientKey]); */
          return ingredients[ingredientKey]; 
      })
      // reduce array into a single number
      .reduce((sum, element) => {
         return sum + element
      }, 0);

      this.setState({purchaseable: sum > 0});
  }

  // add handlers to add and remove ingredients
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

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
    
    // call on updated purchase state
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    
    if (oldCount <= 0) {
      return false;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});

    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchasedCancelHandler = () => {
    this.setState({purchasing: false}); 
  }

  purchaseContinueHandler = () => {
    // alert("BUY THE BURGER NOW"); Hey uhhh be sure to send my burger info to the server
    this.setState({ isLoading: true });
    const orderInfo = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice, /* pls no hack and my client-side price calc */
      customer: {
        name: "Jason Kim",
        address: {
          street: "123 Burger Ln",
          zipCode: "12345",
          country: "USA"
        },
        email: "iLikeBurgers@burgerMail.com",  
      },
      deliveryMethod: "express" /* standard, express, prime */

    } 
    axios.post("/orders.json", orderInfo)
        .then(response => {
          this.setState({ isLoading: false, purchasing: false });
        })
        .catch(error => {
          this.setState({ isLoading: false, purchasing: false });
          console.log(error);
        });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    // loop through all the keys in disabledInfo and check to see are 0 or less
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    
    let orderSummary = <OrderSummary 
                          ingredients={this.state.ingredients}
                          purchaseCancelled={this.purchasedCancelHandler}
                          purchaseContinued={this.purchaseContinueHandler}
                          total={this.state.totalPrice} />;

    // make a check for loading method. if true display loading. once loading is no longer a thing set it back to false
    if (this.state.isLoading) {
      orderSummary = <Spinner />;
    }

    return (
      <Auxiliary>
        <Modal 
          show={this.state.purchasing} 
          modalClosed={this.purchasedCancelHandler} /* bind modal to purchasing state to only show if true  */
        >
          {orderSummary}
        </Modal>
        <Burger  ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler} 
          disabled={disabledInfo}
          purchaseable={this.state.purchaseable}
          price={this.state.totalPrice} 
          ordered={this.purchaseHandler}
        />
      </Auxiliary>
    )
  }
}

export default BurgerBuilder; 