import React from "react"
import ListItem from "./ListItem.js"

function ShoppingCart(props) {

  const cartItemsList = props.stateData.map((item) => {
    return  <ListItem
              className="cart-list-item"
              key={item.id}
              title={item.title}
              handleClick={ props.handleClick }
              id={item.id}
              amount1={item.amount}
              targetList="cart"
            />
  })

  return (
    <div className="cart-list">
      <h2>Winkelmand</h2>
      <div className="clear-button-container">
        <button className="clear-cart-button" onClick={props.emptyCart}>Leeg de winkelmand</button>
      </div>
      <ul>
        {cartItemsList}
      </ul>
    </div>
  );
}

export default ShoppingCart;
