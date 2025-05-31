// src/js/Home.js
import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const banners = [
  '/img/banner-vitrine-01.png',
  '/img/banner-vitrine-02.png',
  '/img/banner-vitrine-03.png'
];

const destaques = [
  {
    id: 1,
    nome: 'Monitor Gamer Curvo 27"',
    imagem: process.env.PUBLIC_URL + '/img/monitor.jpg',
    preco: 1299.00,
    descricao: '165Hz, 1ms, imersão total nos jogos.'
  },
  {
    id: 2,
    nome: 'Mousepad RGB XL',
    imagem: process.env.PUBLIC_URL + '/img/mousepad.jpg',
    preco: 129.00,
    descricao: 'Superfície antiderrapante com luz RGB.'
  },
  {
    id: 3,
    nome: 'Cadeira Gamer Vermelha',
    imagem: process.env.PUBLIC_URL + '/img/cadeira-gamer.jpg',
    preco: 899.00,
    descricao: 'Conforto extremo e design agressivo.'
  }
];

function Home() {
  const [index, setIndex] = useState(0);
  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* Banner Carousel */}
      <section className="hero-carousel">
        <div className="carousel-slide">
          <AnimatePresence mode="wait">
            <motion.img
              key={banners[index]}
              src={banners[index]}
              alt="Banner promocional"
              className="carousel-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* Categorias */}
      <section className="categorias-section">
        <h2>Categorias em Destaque</h2>
        <div className="categorias-grid">
          <a href="/page1">
            <div className="categoria-card">
              <img src={process.env.PUBLIC_URL + '/img/mouse-gamer.jpg'} alt="Mouse" />
              <p>Mouses</p>
            </div>
          </a>
          <a href="/page2">
            <div className="categoria-card">
              <img src={process.env.PUBLIC_URL + '/img/teclado-gamer.jpg'} alt="Teclado" />
              <p>Teclados</p>
            </div>
          </a>
          <a href="/page3">
            <div className="categoria-card">
              <img src={process.env.PUBLIC_URL + '/img/microfone-gamer.jpg'} alt="Microfone" />
              <p>Áudio</p>
            </div>
          </a>
          <a href="/page4">
            <div className="categoria-card">
              <img src={process.env.PUBLIC_URL + '/img/monitor.jpg'} alt="Monitor" />
              <p>Monitores</p>
            </div>
          </a>
        </div>
      </section>

      {/* Vitrine Best Sellers */}
      <section className="vitrine-section">
        <h2>Best Sellers</h2>
        <div className="vitrine-grid">
          {destaques.map((item, i) => (
            <motion.div
              className="vitrine-card"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.imagem} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <span className="preco">R$ {item.preco.toFixed(2)}</span>
              <button className="btn-comprar" onClick={() => addToCart(item)}>Adicionar ao carrinho</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;