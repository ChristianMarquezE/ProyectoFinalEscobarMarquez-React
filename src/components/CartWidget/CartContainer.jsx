import { useContext } from 'react';
import cartContext from '../context/cartContext';
import './CartContainer.css'; // Import the new CSS file

function CartContainer() {
  const { cartItems, removeItem, clearCart, countItemsInCart } =
    useContext(cartContext);

  return (
    <div className="cart-container">
      <h1>Tu carrito</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item-card">
            <img src={item.img} alt={item.title} className="cart-item-image" />{' '}
            <h3 className="cart-item-title">{item.title}</h3>{' '}
            <p className="cart-item-price">Precio: ${item.price}</p>{' '}
            <p>Unidades: {item.count}</p>
            <button className="cart-button" onClick={() => removeItem(item.id)}>
              Eliminar
            </button>{' '}
          </div>
        ))
      )}
      <span>{countItemsInCart()} Artículos en total</span>
      <button className="cart-button" onClick={clearCart}>
        Eliminar todos los artículos
      </button>{' '}
    </div>
  );
}

export default CartContainer;
