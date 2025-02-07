import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import '../../index.css';
import './ItemDetail.css';
import { useContext, useState } from 'react';
import cartContext from '../Context/cartContext';

function ItemDetail(props) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { price, title, coleccion, img, stock, id, detail, discount, freeDelivery } = props;
  const { addItem } = useContext(cartContext);
  const precioOferta = discount
    ? Math.floor(price - (price * discount) / 100)
    : price;

  function onSubmitCount(count) {
    addItem({ id, price, title, count, img, stock, freeDelivery, discount });
    setIsAddedToCart(true);
  }

  return (
    <div className="item-detail-container montserrat-light">
      <div className="item-detail-card">
        <img className="item-detail-image" src={img} alt="product img" />
        <div className="item-detail-info">
          <h3 className="item-detail-title">{title}</h3>
          {stock === 0 ? (
            <p className="item-detail-description">Producto sin stock...</p>
          ) : (
            <p className="item-detail-description">Stock: {stock}</p>
          )}
          <p
            className="item-detail-price"
            style={{ color: discount ? 'green' : 'inherit' }}
          >
            $ {precioOferta} {discount ? `(${discount} % OFF)` : ''}
          </p>
          {freeDelivery ? <p className='item-detail-freeDelivery'>(Despacho gratis)</p> : ""}

          <p className="item-detail-description">
            <strong>Colección: {coleccion}</strong>{' '}
          </p>
          <p className="item-detail-text">{detail}</p>
        </div>
        <div className="item-count-container">
          {stock === 0 ? (
            ''
          ) : isAddedToCart ? (
            <Link to="/cart">
              <button>Ver Carrito</button>
            </Link>
          ) : (
            <ItemCount onSubmitCount={onSubmitCount} max={stock} />
          )}
          {}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
