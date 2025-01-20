import React from "react";
import "./Formularios.css";

const Formularios = () => {
  const formularios = [
    {
      titulo: "INSCRIÇÃO DA EQUIPE (disponível via sistema CADGEA)",
      items: [
        "Documentos para cadastro de Clubes e Assossiações",
        "Inscrição no Campeonato",
        "Inscrição e Especificação do Ginásio",
        "Ficha de Cadastro de Clube - C.B.F.S.",
      ],
    },
    {
      titulo: "INSCRIÇÃO DE LIGA (disponível via sistema CADGEA)",
      items: ["Cadastro/Recadastro"],
    },
    {
      titulo:
        "PATROCÍNIO DE FASE - CAMPEONATO PARANAENSE DE BASE (disponível via sistema CADGEA)",
      items: ["Formulário de Patrocínio"],
    },
    {
      titulo: "REGISTRO DE ATLETAS (disponível via sistema CADGEA)",
      items: [
        "Ficha de registro de atletas F.P.F.S.",
        "Ficha de registro de atletas estrangeiros C.B.F.S.",
        "Renovação de atletas",
        "Transferência estadual",
        "Transferência interestadual",
        "Transferência internacional",
        "Formulário de inscrição de atletas e comissão competições estaduais",
      ],
    },
    {
      titulo:
        "TRANSFERÊNCIA TEMPORÁRIA - C.B.F.S (disponível via sistema CADGEA)",
      items: ["Transferência Temporária"],
    },
    {
      titulo: "REGISTRO DE ATLETAS METROPOLITANO (disponível via sistema CADGEA)",
      items: ["Ficha de Registro de Atletas F.P.F.S."],
    },
    {
      titulo: "COMISSÃO TÉCNICA (disponível via sistema CADGEA)",
      items: [
        "Formulário de registro Comissão Técnica",
        "Formulário de inscrição de atletas e comissão competições estaduais",
      ],
    },
    {
      titulo: "ARTIGOS RELACIONADOS",
      items: [
        "Documentos para Filiação",
        "Relação de Atletas para Jogo",
        "Protocolo Internacional de Jogo",
        "Formulário de Avaliação da Arbitragem - Clube",
      ],
    },
    {
      titulo: "CREDENCIAL IMPRENSA (disponível via sistema CADGEA)",
      items: ["Formulário"],
    },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <div className="banner-overlay"></div>
        <h1 className="banner-title">Formulários</h1>
      </div>

      {/* Lista de Formulários */}
      <div className="formularios-container">
        {formularios.map((formulario, index) => (
          <div key={index} className="formulario-card">
            <h2 className="formulario-title">{formulario.titulo}</h2>
            <ul className="formulario-list">
              {formulario.items.map((item, idx) => (
                <li key={idx} className="formulario-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* WhatsApp CTA */}
        <div className="whatsapp-cta">
          <a href="https://wa.me/your-number" className="whatsapp-link">
            Entre em contato via WhatsApp: CADGEA
          </a>
        </div>
      </div>
    </div>
  );
};

export default Formularios;
