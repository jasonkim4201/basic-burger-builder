import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import CustomError from "../../components/CustomError/CustomError";

const INGREDIENT_PRICES = {
  lettuce: 0.25,
  bacon: 0.75, /* fancy bacon okay */
  cheese: 0.5,
  meat: 1.25
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 5, //yea ur gonna pay a premium on this burger
    purchaseable: false, //switches to true once there's at least one other ingredient on the burger
    purchasing: false, //set to true once proceed to checkout button clicked
    isLoading: false,
    error: false
  }

  componentDidMount() {
    console.log(this.props); //shows history location and match. this props from routes only get passed to direct child.
                            // see burger.js file for workaround to pass into nested components
    axios.get("https://basic-burger-builder.firebaseio.com/ingredients.json")
        .then(response => {
          this.setState({ ingredients : response.data });
        })
        .catch(error => {
          this.setState({ error: true });
        }); 
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
    /* this.setState({ isLoading: true });
    const orderInfo = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
          this.setState({ isLoading: false, purchasing: false });
        })
        .catch(error => {
          this.setState({ isLoading: false, purchasing: false });
          console.log(error);
        }); */
    // .push method essentially allows us to switch pages
    const queryParams = [];
    for (let i in this.state.ingredients) {
        queryParams.push(encodeURIComponent(i) + "=" + encodeURIComponent(this.state.ingredients[i]));
    }
    const queryString = queryParams.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: `?${queryString}`
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
    
    let orderSummary = null;

    let errorMessage = (
      <CustomError />
    );

    let burger = this.state.error ? errorMessage : <Spinner />;
    
    if (this.state.ingredients) {
      burger = (
        <Auxiliary>
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
      );

      orderSummary = <OrderSummary 
                          ingredients={this.state.ingredients}
                          purchaseCancelled={this.purchasedCancelHandler}
                          purchaseContinued={this.purchaseContinueHandler}
                          total={this.state.totalPrice} 
                      />;

    }
    // make a check for loading method. if true display loading. 
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
        {burger}
      </Auxiliary>
    )
  }
}

/* use withErrorHandler and wrap burger builder  also pass on axios instance*/
export default withErrorHandler(BurgerBuilder, axios); 