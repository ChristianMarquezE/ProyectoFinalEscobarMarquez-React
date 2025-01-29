import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cartContext from '../Context/cartContext';

function CartWidget() {
  const context = useContext(cartContext);
  return (
    <Link className="instagram-icon" to="/cart">
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{context.countItemsInCart()}</span>
    </Link>
  );
}

export default CartWidget;
