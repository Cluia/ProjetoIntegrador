// src/pages/TecladosPage.js
import React from 'react';
import '../styles/Produtos.css';
import { useCart } from '../context/CartContext';

const teclados = [
  {
    id: 201,
    nome: 'Alloy Origins Core',
    descricao: 'Switches HyperX Red e estrutura em alumínio.',
    precoPix: 'R$ 499,00',
    precoCard: 'R$ 474,00',
    parcelamento: '10x R$ 47,40 no cartão',
    total: 'Total R$ 529,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/teclado-gamer.jpg'
  },
  {
    id: 202,
    nome: 'Alloy FPS Pro',
    descricao: 'Teclado TKL compacto com retroiluminação vermelha.',
    precoPix: 'R$ 379,00',
    precoCard: 'R$ 364,00',
    parcelamento: '10x R$ 36,40 no cartão',
    total: 'Total R$ 399,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/teclado-fps.jpg'
  },
  {
    id: 203,
    nome: 'Alloy Elite 2',
    descricao: 'Iluminação RGB dinâmica e mídia dedicada.',
    precoPix: 'R$ 649,00',
    precoCard: 'R$ 619,00',
    parcelamento: '10x R$ 61,90 no cartão',
    total: 'Total R$ 679,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/teclado-elite.jpg'
  },
  {
    id: 204,
    nome: 'Teclado Redragon Kumara',
    descricao: 'Switch mecânico Outemu Blue, RGB Rainbow.',
    precoPix: 'R$ 249,00',
    precoCard: 'R$ 234,00',
    parcelamento: '10x R$ 23,40 no cartão',
    total: 'Total R$ 259,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/teclado-redragon.jpg'
  },
  {
    id: 205,
    nome: 'Corsair K55 RGB',
    descricao: 'Teclado semi-mecânico com macros dedicados.',
    precoPix: 'R$ 299,00',
    precoCard: 'R$ 284,00',
    parcelamento: '10x R$ 28,40 no cartão',
    total: 'Total R$ 319,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/teclado-corsair.jpg'
  },
  {
    id: 206,
    nome: 'Logitech G Pro X',
    descricao: 'Teclado mecânico modular com switches intercambiáveis.',
    precoPix: 'R$ 699,00',
    precoCard: 'R$ 674,00',
    parcelamento: '10x R$ 67,40 no cartão',
    total: 'Total R$ 729,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/teclado-logitech.jpg'
  }
];

function TecladosPage() {
  const { addToCart } = useCart();

  return (
    <div className="produtos-container">
      <h1 className="categoria-title">Teclados Gamer</h1>
      <p className="categoria-desc">
        Teclados mecânicos e ergonômicos para precisão e conforto durante o jogo.
      </p>

      <div className="produtos-grid">
        {teclados.map((teclado) => (
          <div className="produto-card" key={teclado.id}>
            <img src={teclado.imagem} alt={teclado.nome} />
            <h3>{teclado.nome}</h3>
            <p className="descricao">{teclado.descricao}</p>
            <p className="preco">{teclado.precoPix} <span className="no-pix">no pix</span></p>
            <p className="preco-card">{teclado.precoCard} <span className="no-card">com 3Devs card</span></p>
            <p className="parcelamento">{teclado.parcelamento}</p>
            <p className="total">{teclado.total}</p>
            <button
              className="btn-comprar"
              onClick={() =>
                addToCart({
                  id: teclado.id,
                  name: teclado.nome,
                  price: parseFloat(
                    teclado.precoPix.replace('R$', '').replace('.', '').replace(',', '.')
                  ),
                  image: teclado.imagem,
                  quantity: 1
                })
              }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TecladosPage;
