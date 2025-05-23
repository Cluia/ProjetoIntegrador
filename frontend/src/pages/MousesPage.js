// src/pages/MousesPage.js
import React from 'react';
import '../styles/Produtos.css';

const mouses = [
  {
    nome: 'Pulsefire FPS Pro',
    descricao: 'Mouse gamer com sensor de precisão e iluminação RGB.',
    precoPix: 'R$ 299,00',
    precoCard: 'R$ 284,00',
    parcelamento: '10x R$ 28,40 no cartão',
    total: 'Total R$ 314,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/mouse-gamer.jpg'
  },
  {
    nome: 'Pulsefire Core RGB',
    descricao: 'Sensor óptico Pixart 3327 com RGB personalizável.',
    precoPix: 'R$ 189,00',
    precoCard: 'R$ 179,00',
    parcelamento: '6x R$ 31,50 no cartão',
    total: 'Total R$ 210,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/mouse-rgb.jpg'
  },
  {
    nome: 'Pulsefire Haste',
    descricao: 'Design ultraleve de 59g com estrutura perfurada.',
    precoPix: 'R$ 279,00',
    precoCard: 'R$ 264,00',
    parcelamento: '10x R$ 26,40 no cartão',
    total: 'Total R$ 299,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/mouse-haste.jpg'
  },
  {
    nome: 'Pulsefire Dart',
    descricao: 'Mouse sem fio com carregamento rápido Qi.',
    precoPix: 'R$ 449,00',
    precoCard: 'R$ 429,00',
    parcelamento: '10x R$ 42,90 no cartão',
    total: 'Total R$ 479,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/mouse-dart.jpg'
  },
  {
    nome: 'Pulsefire Surge',
    descricao: 'Iluminação 360° RGB e sensor Pixart 3389.',
    precoPix: 'R$ 329,00',
    precoCard: 'R$ 314,00',
    parcelamento: '10x R$ 31,40 no cartão',
    total: 'Total R$ 349,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/mouse-surge.jpg'
  },
  {
    nome: 'Pulsefire Raid',
    descricao: 'Botões laterais extras e design ergonômico.',
    precoPix: 'R$ 319,00',
    precoCard: 'R$ 304,00',
    parcelamento: '10x R$ 30,40 no cartão',
    total: 'Total R$ 339,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/mouse-raid.jpg'
  }
];

function MousesPage() {
  return (
    <div className="produtos-container">
      <h1 className="categoria-title">Mouses Gamer</h1>
      <p className="categoria-desc">
        Confira nossa linha de mouses com alta precisão e desempenho para gamers exigentes.
      </p>

      <div className="produtos-grid">
        {mouses.map((mouse, i) => (
          <div className="produto-card" key={i}>
            <img src={mouse.imagem} alt={mouse.nome} />
            <h3>{mouse.nome}</h3>
            <p className="descricao">{mouse.descricao}</p>
            <p className="preco">{mouse.precoPix} <span className="no-pix">no pix</span></p>
            <p className="preco-card">{mouse.precoCard} <span className="no-card">com 3Devs card</span></p>
            <p className="parcelamento">{mouse.parcelamento}</p>
            <p className="total">{mouse.total}</p>
            <button className="btn-comprar">Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MousesPage;
