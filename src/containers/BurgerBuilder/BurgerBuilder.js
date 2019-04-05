import React, {Component} from "react";
import { connect } from "react-redux";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders"; // hmm
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import CustomError from "../../components/CustomError/CustomError";
import * as burgerBuilderActions from "../../store/actions/";


class BurgerBuilder extends Component {
  state = {
    purchasing: false, //set to true once proceed to checkout button clicked
  }

  componentDidMount() {
    console.log(this.props); //shows history location and match. this props from routes only get passed to direct child.
                            // see burger.js file for workaround to pass into nested components
    this.props.onInitIngredients();
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
// adjusted to return the result of the boolean check
     return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchasedCancelHandler = () => {
    this.setState({purchasing: false}); 
  }

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  }

  render() {
    const disabledInfo = {
      ...this.props.ings // see mapStateToProps at botttom 
    };
    // loop through all the keys in disabledInfo and check to see are 0 or less
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    
    let orderSummary = null;

     let errorMessage = (
      <CustomError />
    );
    
    let burger = this.props.error ? errorMessage : <Spinner />; 
    
    if (this.props.ings) {
      burger = (
        <Auxiliary>
            <Burger ingredients={this.props.ings}/>
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved} 
                    disabled={disabledInfo}
                    purchaseable={this.updatePurchaseState(this.props.ings)}
                    price={this.props.price} 
                    ordered={this.purchaseHandler}
                  />
          </Auxiliary>
      );

      orderSummary = <OrderSummary 
                          ingredients={this.props.ings}
                          purchaseCancelled={this.purchasedCancelHandler}
                          purchaseContinued={this.purchaseContinueHandler}
                          total={this.props.price} 
                      />;

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
// oh hey time time wrap connect around my hoc error handler. make constant to map state & dispatch to props

const mapStateToPops = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    error: state.error
  }
}

const maphDispatchToProps = dispatch => {
  return {  
    onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
  }
}

export default connect(mapStateToPops, maphDispatchToProps)(withErrorHandler(BurgerBuilder, axios)); 