import { useContext, useState, useEffect } from 'react';
import cartContext from '../Context/cartContext';
import './CartContainer.css';
import Form from '../Checkout/FormCheckout';

function CartContainer() {
  const { cartItems, removeItem, clearCart, countItemsInCart, getTotalPrice } =
    useContext(cartContext);
  const [cartState, setCartState] = useState(false);

  useEffect(() => {
    setCartState(cartItems.length > 0);
  }, [cartItems]);

  return (
    <div className="cart-container montserrat-light">
      <h1>Tu carrito</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item-card">
            <img src={item.img} alt={item.title} className="cart-item-image" />
            <h3 className="cart-item-title">{item.title}</h3>
            <p className="cart-item-price">Precio: ${item.price}</p>
            <p>Unidades: {item.count}</p>
            <button className="cart-button" onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        ))
      )}
      <span className='total-items'>{countItemsInCart()} Artículos en Total</span>
      <span className='total-price'>{getTotalPrice()}$ Dólares en Total</span>
      <button className="cart-button" onClick={clearCart}>
        Eliminar todos los artículos
      </button>
      {cartState ? <Form /> : ''}
    </div>
  );
}

export default CartContainer;
