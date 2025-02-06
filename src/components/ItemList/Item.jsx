import Button from '../CardProducts/Button';
import '../CardProducts/CardProduct.css';
import { Link } from 'react-router-dom';
function Item(props) {
  const { price, title, text, img, id, discount, freeDelivery, stock } = props;

  const classNameCard = `card ${freeDelivery ? 'card_accent' : ''}`;
  const repartoGratis = freeDelivery ? 'Producto con envío gratis' : '';
  const precioOferta = discount
    ? Math.floor(price - (price * discount) / 100)
    : price;
  return (
    <div className={classNameCard}>
      <img src={img} alt="product img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <div>
          <p
            style={{ color: discount ? 'green' : 'inherit' }}
            className="card-price"
          >
            $ {precioOferta}
          </p>
          <p className="card-text">{discount && '¡Producto en oferta!'}</p>
          <p className="card-text">{repartoGratis && 'Envío gratis'}</p>
          {stock === 0 ? <p className="card-text">Sin stock</p> : ''}
        </div>
        <Link to={`/item/${id}`}>
          <Button>Ver Detalle</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
