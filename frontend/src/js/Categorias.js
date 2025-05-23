import React from 'react';

const categorias = [
  { nome: 'Headsets', imagem: process.env.PUBLIC_URL + '/img/headset.jpg' },
  { nome: 'Microfones', imagem: process.env.PUBLIC_URL + '/img/microfone-gamer.jpg' },
  { nome: 'Teclados', imagem: process.env.PUBLIC_URL + '/img/teclado-gamer.jpg' },
  { nome: 'Mouses', imagem: process.env.PUBLIC_URL + '/img/mouse-gamer.jpg' }
];

const Categorias = () => {
  return (
    <div className="categorias-container">
      <h2 className="titulo-categorias">Principais Categorias</h2>
      <div className="grid-categorias">
        {categorias.map((cat, index) => (
          <div className="categoria-card" key={index}>
            <img src={cat.imagem} alt={cat.nome} />
            <span>{cat.nome.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;
