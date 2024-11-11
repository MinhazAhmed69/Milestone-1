import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext); // Access clearCart here

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Handle checkout logic
  const handleCheckout = () => {
    alert('Your order has been successfully placed!');  // Alert on successful order
    clearCart();  // Clear the cart automatically after placing the order
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>₹{item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        Total: ₹{total.toFixed(2)}
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
      <button className="clear-cart-button" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;