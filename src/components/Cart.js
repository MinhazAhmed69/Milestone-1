import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  // Clear the cart by setting it to an empty array
  const clearCart = () => {
    setCart([]); // Reset the cart to an empty array
  };

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        Total: ${total.toFixed(2)}
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
      <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;