// src/pages/CartPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CartPage.css';
import { useCart } from '../context/CartContext';

function CartPage() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.preco * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2 className="cart-title">Carrinho</h2>

      <div className="cart-table">
        <div className="cart-header">
          <span>Produto</span>
          <span>Quantidade</span>
          <span>Total</span>
        </div>

        {cartItems.map((product) => (
          <div className="cart-item" key={product.id}>
            <div className="item-info">
              <img src={product.imagem} alt={product.nome} className="item-image" />
              <div>
                <p className="item-name">{product.nome}</p>
                <p className="item-price">R$ {product.preco.toFixed(2)}</p>
              </div>
            </div>

            <div className="item-qty">
              <button onClick={() => updateQuantity(product.id, -1)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => updateQuantity(product.id, 1)}>+</button>
            </div>

            <div className="item-total">
              R$ {(product.preco * product.quantity).toFixed(2)}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(product.id)}
                title="Remover"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: <strong>R$ {calculateTotal()}</strong></p>
        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default CartPage;
