import './SocialIcons.css';
import '../Nav/Nav.css';
import { Link } from 'react-router-dom';
import CartWidget from '../../CartWidget/CartWidget';
function SocialIcons() {
  return (
    <div className="social-icons2 montserrat-light">
      <Link className="contacto-link" to="/contacto">
        Contacto
      </Link>
      <Link
        className="instagram-icon"
        to="https://www.instagram.com/jorregodesign/"
        target="_blank"
      >
        <i className="fab fa-instagram"></i>
      </Link>
      <Link
        className="instagram-icon"
        to="mailto:jorregor@udd.cl"
        target="_blank"
      >
        <i className="fa-regular fa-envelope"></i>
      </Link>

      <CartWidget></CartWidget>
    </div>
  );
}

export default SocialIcons;