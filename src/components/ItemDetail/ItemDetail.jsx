import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import '../../index.css';
import './ItemDetail.css';
import { useContext, useState } from 'react';
import cartContext from '../Context/cartContext';

function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { price, title, coleccion, img, stock, id } = props;
  const { addItem } = useContext(cartContext);

  function onSubmitCount(count) {
    addItem({ id, price, title, count, img, stock});
    setIsAddedToCart(true);
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <img className="item-detail-image" src={img} alt="product img" />
        <div className="item-detail-info">
          <h3 className="item-detail-title">{title}</h3>
          <p className="item-detail-text">Stock: {stock}</p>
          <p className="item-detail-price">$ {price}</p>
          <p className="item-detail-description">Colección: {coleccion} </p>
        </div>
        <div className="item-count-container">
          {isAddedToCart ? (
            <Link to="/cart">
              <button>Ver Carrito</button>
            </Link>
          ) : (
            <ItemCount onSubmitCount={onSubmitCount} max={stock} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
