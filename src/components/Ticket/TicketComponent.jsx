import React from 'react';
import { useParams, useState } from 'react-router-dom';
import '../Checkout/FormCheckout';

export default function TicketComponent() {
  const { id } = useParams();
  const [isContacted, setIsContacted] = useState(false);
  const handleReturnHome = () => {
    clearCart();
    window.location.href = '/';
  };

  return (
    <div className="order-confirmation">
      <h3>¡ESTAS A UN PASO DE FINALIZAR TU COMPRA!</h3>
      <p>Comparte tu ID de compra:</p>
      <p>
        ID N°: <strong>{id}</strong>
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
  );
}
