import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

function App() {
  const slides = [
    {
      firstName: "Julio",
      lastName: "Rozo",
      profileUrl: "https://unsplash.com/@scoutthecity",
      backgroundImage: "https://unsplash.it/g/1500/2200?image=838",
      buttonLabel: "Ver perfil de Julio"
    },
    {
      firstName: "Pedro",
      lastName: "Lucas",
      profileUrl: "https://unsplash.com/@madbyte",
      backgroundImage: "https://unsplash.it/g/1500/1000?image=1078",
      buttonLabel: "Conheça Pedro"
    },
    {
      firstName: "2Devs",
      lastName: "Studios",
      profileUrl: "https://unsplash.com/@maicoamorim",
      backgroundImage: "https://unsplash.it/g/1500/1000?image=1077",
      buttonLabel: "Acesse 2Devs"
    },
    {
      firstName: "CEO",
      lastName: "DevP/DevJ",
      profileUrl: "https://unsplash.com/@mariocalvo",
      backgroundImage: "https://unsplash.it/g/1500/1200?image=345",
      buttonLabel: "Saiba mais sobre o CEO"
    }
  ];

  const navigate = useNavigate();

  // Função para redirecionar para a página de login
  const handleProfileClick = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="untitled">
      {/* Botão de perfil */}
      <button
        className="profile-button"
        onClick={handleProfileClick}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 1000, // Garante que o botão fique acima de tudo
        }}
      >
        <i className="fas fa-user"></i> {/* Ícone de pessoa do FontAwesome */}
      </button>

      {/* Seção de slides */}
      <div className="untitled__slides">
        {slides.map((slide, index) => (
          <div className="untitled__slide" key={index}>
            <div 
              className="untitled__slideBg" 
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            ></div>
            <div className="untitled__slideContent">
              <span>{slide.firstName}</span> 
              <span>{slide.lastName}</span>
              <a className="button" href={slide.profileUrl} target="_blank" rel="noopener noreferrer"> 
                {slide.buttonLabel} 
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Shutters e indicadores de slide */}
      <div className="untitled__shutters"></div>
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <div 
            key={index} 
            className="slide-indicator" 
            style={{ animationDelay: `${index * 5}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;