import React from 'react';
import './ManualsSection.css';
import Banner from "../imgs/banner-historia.jpg";


const ManualsSection = () => {
  const manuals = [
    { id: 1, title: 'GERAL', subtitle: 'Notificações e Relatórios', image: 'link-imagem1.jpg' },
    { id: 2, title: 'ATLETAS', subtitle: 'Registro e Documentação', image: 'link-imagem2.jpg' },
    { id: 3, title: 'MODELOS', subtitle: 'Formulários e Modelos', image: 'link-imagem3.jpg' },
    { id: 4, title: 'DOCUMENTOS', subtitle: 'Emissão de Certificados', image: 'link-imagem4.jpg' },
    { id: 5, title: 'WEBMAIL', subtitle: 'Configuração de Webmail', image: 'link-imagem5.jpg' },
  ];

  return (
    <section className="manuals-section">
      <div className="banner" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="banner-overlay">
          <h1 className="banner-title">Manuais</h1>
        </div>
      </div>
      <p className="section-subtitle">Manuais para preenchimentos corretos de formulários</p>
      <div className="cards-container">
        {manuals.map((manual) => (
          <div key={manual.id} className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${manual.image})` }}
            >
              <div className="overlay"></div>
            </div>
            <div className="card-content">
              <h2>{manual.title}</h2>
              <p>{manual.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManualsSection;