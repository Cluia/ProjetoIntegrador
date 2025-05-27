import React, { useContext } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Carrinho</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="cart-table">
            <div className="cart-header">
              <span>Produto</span>
              <span>Quantidade</span>
              <span>Total</span>
            </div>

            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="item-info">
                  <img src={item.image || item.imagem} alt={item.name || item.nome} className="item-image" />
                  <div>
                    <p className="item-name">{item.name || item.nome}</p>
                    <p className="item-price">R$ {item.price?.toFixed(2) || item.precoPix}</p>
                  </div>
                </div>

                <div className="item-qty">
                  <button onClick={() => decreaseQuantity(item.id)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <div className="item-total">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>

                <button onClick={() => removeFromCart(item.id)} className="remove-btn">🗑️</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <p>Total: <strong>R$ {total}</strong></p>
            <button className="checkout-btn" onClick={() => navigate('/checkout')}>
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
