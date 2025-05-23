// src/pages/CheckoutPage.js
import React from 'react';
import '../styles/CheckoutPage.css';

function CheckoutPage() {
  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Finalizar Compra</h2>

      <form className="checkout-form">
        <section>
          <h3>Contato</h3>
          <input type="email" placeholder="E-mail*" required />
          <input type="text" placeholder="Nome completo*" required />
          <div className="row">
            <input type="tel" placeholder="Celular*" required />
            <input type="text" placeholder="CPF*" required />
          </div>
        </section>

        <section>
          <h3>Entrega</h3>
          <input type="text" placeholder="CEP*" required />
        </section>

        <section>
          <h3>Pagamento</h3>
          <div className="payment-box">
            <label>
              <input type="radio" checked readOnly /> Cartão de Crédito
            </label>
            <div className="card-icons">
              <span>💳 VISA</span>
              <span>💳 MASTERCARD</span>
              <span>💳 AMEX</span>
            </div>
            <input type="text" placeholder="Número do cartão" required />
            <input type="text" placeholder="Nome impresso no cartão" required />
          </div>
        </section>

        <button type="submit" className="submit-btn">Confirmar Pedido</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
