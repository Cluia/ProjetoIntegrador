// src/pages/MonitoresPage.js
import React from 'react';
import '../styles/Produtos.css';
import { useCart } from '../context/CartContext';

const monitores = [
  {
    id: 301,
    nome: 'Monitor Gamer Curvo 27"',
    descricao: '165Hz, 1ms, imersão total nos jogos.',
    precoPix: 'R$ 1.299,00',
    precoCard: 'R$ 1.234,00',
    parcelamento: '10x R$ 123,40 no cartão',
    total: 'Total R$ 1.349,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/monitor.jpg'
  },
  {
    id: 302,
    nome: 'Monitor LED 24" Full HD',
    descricao: 'Painel IPS com cores vibrantes e bordas finas.',
    precoPix: 'R$ 849,00',
    precoCard: 'R$ 819,00',
    parcelamento: '10x R$ 81,90 no cartão',
    total: 'Total R$ 899,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/monitor-fullhd.jpg'
  },
  {
    id: 303,
    nome: 'Monitor Gamer 240Hz',
    descricao: 'Alta taxa de atualização para jogos competitivos.',
    precoPix: 'R$ 1.699,00',
    precoCard: 'R$ 1.639,00',
    parcelamento: '10x R$ 163,90 no cartão',
    total: 'Total R$ 1.799,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/monitor-240hz.jpg'
  },
  {
    id: 304,
    nome: 'Monitor Ultrawide 29"',
    descricao: 'Maior produtividade e imersão em jogos e trabalho.',
    precoPix: 'R$ 1.449,00',
    precoCard: 'R$ 1.399,00',
    parcelamento: '10x R$ 139,90 no cartão',
    total: 'Total R$ 1.549,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/monitor-ultrawide.jpg'
  },
  {
    id: 305,
    nome: 'Monitor 4K UHD 28"',
    descricao: 'Resolução ultra-alta para criadores de conteúdo.',
    precoPix: 'R$ 2.199,00',
    precoCard: 'R$ 2.099,00',
    parcelamento: '10x R$ 209,90 no cartão',
    total: 'Total R$ 2.299,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/monitor-4k.jpg'
  },
  {
    id: 306,
    nome: 'Monitor Touchscreen 22"',
    descricao: 'Interação intuitiva com toque multi-touch.',
    precoPix: 'R$ 1.099,00',
    precoCard: 'R$ 1.049,00',
    parcelamento: '10x R$ 104,90 no cartão',
    total: 'Total R$ 1.149,00 à prazo',
    imagem: process.env.PUBLIC_URL + '/img/monitor-touch.jpg'
  }
];

function MonitoresPage() {
  const { addToCart } = useCart();

  return (
    <div className="produtos-container">
      <h1 className="categoria-title">Monitores Gamer</h1>
      <p className="categoria-desc">
        Experiência visual imersiva com monitores de alta qualidade para games e produtividade.
      </p>

      <div className="produtos-grid">
        {monitores.map((monitor) => (
          <div className="produto-card" key={monitor.id}>
            <img src={monitor.imagem} alt={monitor.nome} />
            <h3>{monitor.nome}</h3>
            <p className="descricao">{monitor.descricao}</p>
            <p className="preco">{monitor.precoPix} <span className="no-pix">no pix</span></p>
            <p className="preco-card">{monitor.precoCard} <span className="no-card">com 3Devs card</span></p>
            <p className="parcelamento">{monitor.parcelamento}</p>
            <p className="total">{monitor.total}</p>
            <button
              className="btn-comprar"
              onClick={() =>
                addToCart({
                  id: monitor.id,
                  name: monitor.nome,
                  price: parseFloat(
                    monitor.precoPix.replace('R$', '').replace(/\./g, '').replace(',', '.')
                  ),
                  image: monitor.imagem,
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

export default MonitoresPage;
