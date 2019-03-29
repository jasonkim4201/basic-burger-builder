import React, {Component} from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";



class BurgerBuilder extends Component {
  state = {
    ingredients: {
        bacon: 1,
        salad: 1,
        cheese: 2,
        meat: 2,
        
    },
    price: 10000
  }

  render() {
    return (
      <Auxiliary>
        <Burger  ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </Auxiliary>
    )
  }
}

export default BurgerBuilder; 