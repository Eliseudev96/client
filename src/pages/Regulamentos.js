import React from "react";
import "./Regulamentos.css"; 
import Banner from "../imgs/banner-historia.jpg";


const documentos = [
  {
    titulo: "NOTA OFICIAL 124-2024 SÉRIE PRATA REC RETIFICAÇÃO",
    downloadLink: "#",
    visualizarLink: "#",
  },
  {
    titulo: "BOL 031 REGULAMENTO ESPECÍFICO CAMPEONATO PARANAENSE - SUB20 2024",
    downloadLink: "#",
    visualizarLink: "#",
  },
  {
    titulo: "BOL 029 - 2024 - REGULAMENTO ESPECÍFICO SERIE PRATA FEMININA 2024",
    downloadLink: "#",
    visualizarLink: "#",
  },
  {
    titulo: "BOL 026-2024 - REGULAMENTO ESPECÍFICO COPA UNIÃO MASCULINA 2024",
    downloadLink: "#",
    visualizarLink: "#",
  },
  {
    titulo: "BOL 027 - 2024 Regulamento Campeonato Paranaense Base Feminino FPFS 2024",
    downloadLink: "#",
    visualizarLink: "#",
  },
];

const Regulamentos = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-overlay" />
        <h1 className="banner-title">Regulamentos</h1>
      </div>
      <div className="documentos-container">
      <h1>Documentos</h1>
        {documentos.map((doc, index) => (
          <div key={index} className="documento-item">
            <p className="documento-titulo">{doc.titulo}</p>
            <div className="documento-botoes">
              <a href={doc.downloadLink} className="botao download">
                Download
              </a>
              <a href={doc.visualizarLink} className="botao visualizar">
                Visualizar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Regulamentos;
