import React from "react";
import "./Regulamentos.css"; 


const documentos = [
  {
    titulo: "LIVRO NASCIONAL DE REGRAS 2024",
    downloadLink: "#",
    visualizarLink: "#",
  },
  {
    titulo: "LIVRO NASCIONAL DE REGRAS 2023",
    downloadLink: "#",
    visualizarLink: "#",
  },
  {
    titulo: "LIVRO NASCIONAL DE REGRAS 2022",
    downloadLink: "#",
    visualizarLink: "#",
  },
  {
    titulo: "LIVRO NASCIONAL DE REGRAS 2021",
    downloadLink: "#",
    visualizarLink: "#",
  },
  {
    titulo: "LIVRO NASCIONAL DE REGRAS 2020",
    downloadLink: "#",
    visualizarLink: "#",
  },
];

const Regras = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-overlay" />
        <h1 className="banner-title">Regras</h1>
      </div>
      <div className="documentos-container">
      <h1>Livro de Regras</h1>
        {documentos.map((doc, index) => (
          <div key={index} className="documento-item">
            <p style={{textAlign: "center"}} className="documento-titulo">{doc.titulo}</p>
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

export default Regras;
