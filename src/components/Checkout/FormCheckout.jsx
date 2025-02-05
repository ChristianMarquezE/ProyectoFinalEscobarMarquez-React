import { useState, useContext } from 'react';
import cartContext from '../Context/cartContext';
import { createBuyOrder } from '../../data/database';
import './FormCheckout.css';
import { useNavigate } from 'react-router-dom';


export default function Form() {
  const [userData, setUserData] = useState({
    username: '',
    surname: '',
    age: '',
    email: '',
  });

  const [orderID, setOrderID] = useState(null);
  const [ageError, setAgeError] = useState('');
  const navigateTo = useNavigate();

  function onInputChange(evt) {
    const inputName = evt.target.name;
    const newUserData = { ...userData };
    newUserData[inputName] = evt.target.value;

    if (inputName === 'age') {
      const age = parseInt(evt.target.value, 10);
      if (age < 10 || age > 150) {
        setAgeError('La edad debe estar entre 10 y 150 años.');
      } else {
        setAgeError('');
      }
    }

    setUserData(newUserData);
  }

  const { cartItems, getTotalPrice, clearCart } = useContext(cartContext);

  async function handleCheckout(evt) {
    evt.preventDefault();

    if (userData.age < 10 || userData.age > 150) {
      setAgeError('La edad debe estar entre 10 y 150 años.');
      return;
    }

    const orderData = {
      Comprador: {
        Nombre: userData.username,
        Apellido: userData.surname,
        Edad: userData.age,
        Email: userData.email,
      },
      Fecha: new Date(),
      Artículos: cartItems,
      total: getTotalPrice(),
    };
    setOrderID(null);
    const newOrderID = await createBuyOrder(orderData);
    setOrderID(newOrderID);
    const redirectURL = `/ticket/${newOrderID}`
    navigateTo(redirectURL);
    
  }

  const handleReturnHome = () => {
    clearCart();
    window.location.href = '/';
  };

  return (
    <div className="form-checkout">
      <form>
        <h2 className="form-group">Para comprar, rellene sus datos:</h2>
        <div className="form-group">
          <label htmlFor="username">Nombre</label>
          <input
            name="username"
            type="text"
            onChange={onInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="surname">Apellido</label>
          <input name="surname" type="text" onChange={onInputChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="age">Edad</label>
          <input name="age" type="number" onChange={onInputChange} required />
          {ageError && <p className="error-message">{ageError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" onChange={onInputChange} required />
        </div>

        <button
          disabled={
            !(
              userData.username &&
              userData.surname &&
              userData.age &&
              userData.email
            )
          }
          onClick={handleCheckout}
        >
          Realizar Compra
        </button>
      </form>

      {orderID && (
        <div className="order-confirmation">
          <h3>¡ESTAS A UN PASO DE FINALIZAR TU COMPRA!</h3>
          <p>Comparte tu ID de compra:</p>
          <p>
            ID N°: <strong>{orderID}</strong>
          </p>

          <button
            onClick={() => {
              window.open(
                `mailto:jorregor@udd.cl?subject=Mi ID de pedido&body=Mi ID de pedido es: ${orderID}`
              );
              setIsContacted(true);
            }}
          >
            Email
          </button>
          <button
            onClick={() => {
              window.open(`https://www.instagram.com/jorregodesign/`);
              setIsContacted(true);
            }}
          >
            Instagram
          </button>
          <p>El vendedor se comunicará a la brevedad.</p>
          <button onClick={handleReturnHome} disabled={!isContacted}>
            Volver al Inicio
          </button>
        </div>
      )}
    </div>
  );
}