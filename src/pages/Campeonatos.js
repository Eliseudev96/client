import React from "react";
import "./Campeonatos.css";

const CardCampeonato = ({ titulo, opcoes, imagem }) => {
  return (
    <div className="card-campeonato">
      <div className="imagem" style={{ backgroundImage: `url(${imagem})` }}></div>
      <div className="conteudo">
        <h2>{titulo}</h2>
        <div className="botoes">
          {opcoes.map((opcao, index) => (
            <button key={index}>{opcao}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Campeonatos = () => {
    const campeonatos = [
      {
        titulo: "Série Ouro",
        imagem: "path/to/serie-ouro.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Série Prata",
        imagem: "path/to/serie-prata.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Série Bronze",
        imagem: "path/to/serie-bronze.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Paranaense de Base",
        imagem: "path/to/paranaense-base.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Feminino Ouro",
        imagem: "path/to/feminino-ouro.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Feminino Prata",
        imagem: "path/to/feminino-prata.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Copa Paraná",
        imagem: "path/to/copa-parana.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Copa União Masculina",
        imagem: "path/to/copa-uniao-masculino.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Copa União Feminina",
        imagem: "path/to/copa-uniao-feminina.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Metropolitano",
        imagem: "path/to/metropolitano.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
      {
        titulo: "Jogos do Governo",
        imagem: "path/to/jogos-governo.png",
        opcoes: ["Clubes, Resultados, Classificação, Cartões, Artilharia. Notas oficiais, Boletins Oficiais, Regulamento "],
      },
    ];

  return (
    <div className="campeonatos">
      <h1>Campeonatos</h1>
      <div className="cards-container">
        {campeonatos.map((campeonato, index) => (
          <CardCampeonato key={index} {...campeonato} />
        ))}
      </div>
      <button className="base-category">Categorias de Base</button>
    </div>
  );
};

export default Campeonatos;
