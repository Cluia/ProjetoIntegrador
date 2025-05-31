// src/js/Produtos.js
import React from 'react';
import Navbar from './Navbar';
import '../styles/Produtos.css';

const produtos = [
  {
    nome: 'HyperX Cloud Jet',
    imagem: process.env.PUBLIC_URL + '/img/headset.jpg',
    descricao: 'Headset sem fio com som imersivo e design confortável.',
    precoPix: 'R$ 499,00',
    precoParcelado: 'R$ 475,00',
    parcelas: '12x R$ 41,90 no cartão',
    juros: 'Total R$ 550,80 à prazo'
  },
  {
    nome: 'Pulsefire FPS Pro',
    imagem: process.env.PUBLIC_URL + '/img/mouse-gamer.jpg',
    descricao: 'Mouse gamer com sensor de precisão e iluminação RGB.',
    precoPix: 'R$ 299,00',
    precoParcelado: 'R$ 284,00',
    parcelas: '10x R$ 28,40 no cartão',
    juros: 'Total R$ 314,00 à prazo'
  },
  {
    nome: 'Teclado Alloy Origins',
    imagem: process.env.PUBLIC_URL + '/img/teclado-gamer.jpg',
    descricao: 'Teclado mecânico com switches HyperX e estrutura em alumínio.',
    precoPix: 'R$ 699,00',
    precoParcelado: 'R$ 670,00',
    parcelas: '12x R$ 55,83 no cartão',
    juros: 'Total R$ 760,00 à prazo'
  },
  {
    nome: 'Microfone QuadCast',
    imagem: process.env.PUBLIC_URL + '/img/microfone-gamer.jpg',
    descricao: 'Microfone USB com iluminação RGB e qualidade de estúdio.',
    precoPix: 'R$ 799,00',
    precoParcelado: 'R$ 768,00',
    parcelas: '12x R$ 64,00 no cartão',
    juros: 'Total R$ 840,00 à prazo'
  },
  {
    nome: 'Mousepad RGB XL',
    imagem: process.env.PUBLIC_URL + '/img/mousepad.jpg',
    descricao: 'Mousepad com iluminação RGB e superfície antiderrapante.',
    precoPix: 'R$ 129,00',
    precoParcelado: 'R$ 119,00',
    parcelas: '6x R$ 21,50 no cartão',
    juros: 'Total R$ 129,00 à prazo'
  },
  {
    nome: 'Monitor Gamer Curvo 27"',
    imagem: process.env.PUBLIC_URL + '/img/monitor.jpg',
    descricao: 'Monitor curvo com 165Hz, 1ms, ideal para jogos de alta performance.',
    precoPix: 'R$ 1.299,00',
    precoParcelado: 'R$ 1.199,00',
    parcelas: '12x R$ 114,00 no cartão',
    juros: 'Total R$ 1.368,00 à prazo'
  },
  {
    nome: 'Webcam Full HD 1080p',
    imagem: process.env.PUBLIC_URL + '/img/webcam.jpg',
    descricao: 'Webcam com microfone embutido e qualidade Full HD.',
    precoPix: 'R$ 149,00',
    precoParcelado: 'R$ 139,00',
    parcelas: '5x R$ 29,90 no cartão',
    juros: 'Total R$ 149,50 à prazo'
  },
  {
    nome: 'Cadeira Gamer Vermelha',
    imagem: process.env.PUBLIC_URL + '/img/cadeira-gamer.jpg',
    descricao: 'Cadeira ergonômica com apoio lombar e reclinação até 180°.',
    precoPix: 'R$ 899,00',
    precoParcelado: 'R$ 870,00',
    parcelas: '12x R$ 78,90 no cartão',
    juros: 'Total R$ 946,80 à prazo'
  }
];

const Produtos = () => {
  return (
    <>
      <Navbar />
      <div className="produtos-container">
        <h2 className="titulo">BEST SELLERS</h2>
        <div className="produtos-grid">
          {produtos.map((p, i) => (
            <div className="produto-card" key={i}>
              <img src={p.imagem} alt={p.nome} />
              <h3>{p.nome}</h3>
              <p className="descricao">{p.descricao}</p>
              <p className="preco-pix">{p.precoPix} <span className="no-pix">no pix</span></p>
              <p className="preco-parcelado">{p.precoParcelado} <span className="com-prime">com 3Devs card</span></p>
              <p className="parcelamento">
                {p.parcelas}<br />
                <span className="info-parcela">{p.juros}</span>
              </p>
              <button className="btn-comprar">Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Produtos;