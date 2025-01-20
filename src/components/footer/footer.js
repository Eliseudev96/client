import React from "react";
import "./Footer.css";
import logo from '../../../src/imgs/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-social">
          <h4>SIGA A FPFS</h4>
          <div className="social-icons">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="footer-logo">
          <img src={logo} alt="FPFS Logo" />
        </div>

        <div className="footer-address">
          <p>R. Marechal Deodoro, 869 - 15º Andar</p>
          <p>80.060-010 - CENTRO - Curitiba - PR</p>
          <p>41-3233-4571 - 41-3233-6257</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-column">
          <h4>FEDERAÇÃO</h4>
          <ul>
            <li>História</li>
            <li>Diretoria</li>
            <li>Galeria dos Presidentes</li>
            <li>Manuais</li>
            <li>Regulamentos</li>
            <li>Resoluções</li>
            <li>Formulários</li>
            <li>Cursos</li>
            <li>Calendário</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CBFS</h4>
          <ul>
            <li>Regras Oficiais</li>
            <li>Comunicados</li>
            <li>Notícias</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CAMPEONATOS</h4>
          <ul>
            <li>Série Ouro</li>
            <li>Série Prata</li>
            <li>Série Bronze</li>
            <li>Paranaense de Base</li>
            <li>Feminino Ouro</li>
            <li>Feminino Prata</li>
            <li>Copa Paraná</li>
            <li>Copa União Masculina</li>
            <li>Copa União Feminina</li>
            <li>Metropolitano</li>
            <li>Jogos do Governo</li>
            <li>BID - Atletas</li>
            <li>BID - Comissão Técnica</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>TRIBUNAL</h4>
          <ul>
            <li>Documentos</li>
            <li>Denúncia</li>
            <li>Súmulas</li>
            <li>Pleno</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
