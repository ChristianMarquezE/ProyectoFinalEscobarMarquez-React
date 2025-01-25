import Button from '../CardProducts/Button';
import '../CardProducts/CardProduct.css';
import { Link, NavLink } from 'react-router-dom';
function Item(props) {
  const { price, title, text, img, id, discount, stock, freeDelivery } = props;

  const classNameCard = `card ${freeDelivery ? 'card_accent' : ''}`;
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
            $ {price}
          </p>
          {discount && 'Producto en oferta!'}
        </div>
        <Link to={`/item/${id}`}>
          <Button>Ver Detalle</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
//rfce
