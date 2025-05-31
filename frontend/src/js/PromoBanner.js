// src/js/PromoBanner.js
import React from 'react';
import '../styles/PromoBanner.css';

const mensagens = [
  "🚚 FRETE GRÁTIS",
  "🎁 CUPOM: DEV10",
  "💸 15% CASHBACK",
  "🔁 TROCAS GRATUITAS",
  "🔥 OFERTAS IMPERDÍVEIS"
];

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-marquee">
        <div className="promo-track">
          {mensagens.map((msg, index) => (
            <span key={index} className="promo-item">{msg}</span>
          ))}
          {mensagens.map((msg, index) => (
            <span key={index + mensagens.length} className="promo-item">{msg}</span> // duplica para loop suave
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;