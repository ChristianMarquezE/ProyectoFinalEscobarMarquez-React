import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import '../Checkout/FormCheckout';
import './TicketComponent.css';
import { useState } from 'react';
import TicketContext from '../Context/ticketContext';

export default function TicketComponent() {
  const { ticketid } = useParams();
  const { setTicketid } = useContext(TicketContext);

  const [isContacted, setIsContacted] = useState(false);

  useEffect(() => {
    setTicketid(ticketid);
  }, [ticketid, setTicketid]);

  const handleReturnHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="order-confirmation margin-top">
      {ticketid === 'null' ? (
        <>
          <h3>No has realizado una compra aún.</h3>
          <p>Podrás ver tu ticket una vez realizada la compra.</p>
        </>
      ) : (
        <>
          <h3>¡ESTAS A UN PASO DE FINALIZAR TU COMPRA!</h3>
          <p>Comparte tu ID de compra:</p>
          <p>
            ID N°: <strong>{ticketid}</strong>
          </p>

          <button
            onClick={() => {
              window.open(
                `mailto:jorregor@udd.cl?subject=Mi ID de pedido&body=Mi ID de pedido es: ${ticketid}`
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
          <button
            className={isContacted ? '' : 'button-disabled'}
            onClick={handleReturnHome}
            disabled={!isContacted}
          >
            Volver al Inicio
          </button>
        </>
      )}
    </div>
  );
}
