// src/pages/AudioPage.js
import React from 'react';
import '../styles/Produtos.css';
import { useCart } from '../context/CartContext';

const audios = [
  {
    id: 301,
    nome: 'HyperX Cloud II',
    descricao: 'Som surround 7.1, conforto premium e microfone removível.',
    precoPix: 'R$ 599,00',
    precoCard: 'R$ 574,00',
    parcelamento: '10x R$ 57,40 no cartão',
    total: 'Total R$ 629,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/Headset.jpg'
  },
  {
    id: 302,
    nome: 'Logitech G Pro X',
    descricao: 'Microfone Blue VO!CE e som de alta fidelidade.',
    precoPix: 'R$ 749,00',
    precoCard: 'R$ 724,00',
    parcelamento: '10x R$ 72,40 no cartão',
    total: 'Total R$ 779,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/headset-logitech.jpg'
  },
  {
    id: 303,
    nome: 'Razer Kraken X',
    descricao: 'Leveza, qualidade de som e ótimo custo-benefício.',
    precoPix: 'R$ 299,00',
    precoCard: 'R$ 284,00',
    parcelamento: '10x R$ 28,40 no cartão',
    total: 'Total R$ 319,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/headset-razer.jpg'
  },
  {
    id: 304,
    nome: 'Redragon Zeus 2',
    descricao: 'Headset gamer com RGB e áudio imersivo.',
    precoPix: 'R$ 239,00',
    precoCard: 'R$ 224,00',
    parcelamento: '10x R$ 22,40 no cartão',
    total: 'Total R$ 259,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/headset-redragon.jpg'
  },
  {
    id: 305,
    nome: 'Corsair HS60 Pro',
    descricao: 'Conforto duradouro e som 7.1 com driver de 50mm.',
    precoPix: 'R$ 429,00',
    precoCard: 'R$ 414,00',
    parcelamento: '10x R$ 41,40 no cartão',
    total: 'Total R$ 449,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/headset-corsair.jpg'
  },
  {
    id: 306,
    nome: 'SteelSeries Arctis 5',
    descricao: 'Headset com iluminação RGB e áudio DTS X v2.0.',
    precoPix: 'R$ 549,00',
    precoCard: 'R$ 524,00',
    parcelamento: '10x R$ 52,40 no cartão',
    total: 'Total R$ 579,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/headset-steelseries.jpg'
  }
];

function AudioPage() {
  const { addToCart } = useCart();

  return (
    <div className="produtos-container">
      <h1 className="categoria-title">Áudio Gamer</h1>
      <p className="categoria-desc">
        Headsets e microfones com qualidade profissional e conforto para longas sessões.
      </p>

      <div className="produtos-grid">
        {audios.map((item) => (
          <div className="produto-card" key={item.id}>
            <img src={item.imagem} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p className="descricao">{item.descricao}</p>
            <p className="preco">{item.precoPix} <span className="no-pix">no pix</span></p>
            <p className="preco-card">{item.precoCard} <span className="no-card">com 3Devs card</span></p>
            <p className="parcelamento">{item.parcelamento}</p>
            <p className="total">{item.total}</p>
            <button
              className="btn-comprar"
              onClick={() =>
                addToCart({
                  id: item.id,
                  name: item.nome,
                  price: parseFloat(item.precoPix.replace('R$', '').replace(/\./g, '').replace(',', '.')),
                  image: item.imagem,
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

export default AudioPage;