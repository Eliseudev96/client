import React from "react";
import "./GaleriaPresidentes.css";
import Banner from "../imgs/banner-historia.jpg"; 
import FotoPresidente from "../imgs/banner-historia.jpg"; 

const GaleriaPresidentes = () => {
  const presidentes = [
    { nome: "Lorem Ipsum", anos: "1900 - 1905" },
    { nome: "Lorem Ipsum", anos: "1905 - 1910" },
    { nome: "Lorem Ipsum", anos: "1910 - 1915" },
    { nome: "Lorem Ipsum", anos: "1915 - 1920" },
    { nome: "Lorem Ipsum", anos: "1920 - 1925" },
    { nome: "Lorem Ipsum", anos: "1925 - 1930" },
  ];

  return (
    <section id="galeria-presidentes" className="galeria-presidentes">
      <div
        className="banner"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="overlay">
          <h1>Galeria de Presidentes</h1>
        </div>
      </div>
      <div className="content">
        <h2>Os Presidentes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
        <p>Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        <div className="grid">
          {presidentes.map((presidente, index) => (
            <div className="cardP" key={index}>
              <img src={FotoPresidente} alt={presidente.nome} />
              <div className="info">
                <h3>{presidente.nome}</h3>
                <p>{presidente.anos}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>
    </section>
  );
};

export default GaleriaPresidentes;
