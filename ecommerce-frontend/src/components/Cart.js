import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;

