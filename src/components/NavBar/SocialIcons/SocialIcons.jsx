import './SocialIcons.css';
import '../Nav/Nav.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react'; // Correctly import useContext from react
import CartWidget from '../../CartWidget/CartWidget';
import TicketContext from '../../Context/ticketContext'; // Import the TicketContext

function SocialIcons() {
  const { ticketid } = useContext(TicketContext); // Access ticketid from context

  return (
    <div className="social-icons2 montserrat-light">
      <NavLink className="contacto-link" to="/contacto">
        Contacto
      </NavLink>
      <NavLink className="ticket-link" to={`/ticket/${ticketid}`}>
        Ver Ticket
      </NavLink>
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

      <CartWidget />
    </div>
  );
}

export default SocialIcons;
