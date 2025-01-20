import React from "react";
import { Link } from "react-router-dom"; 
import "./Menu.css"; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../../../src/imgs/logo.png';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-left">
        <img src={logo} alt="FPFS Logo" className="menu-logo" />
        <ul className="menu-links">
          <li><Link to="/">NOTÍCIAS</Link></li>
          <li className="dropdown">
            <Link to="#">FEDERAÇÃO</Link>
            <ul className="dropdown-menu">
              <li><Link to="/nossa-historia">História</Link></li> 
              <li><Link to="">Diretoria</Link></li>
              <li><Link to="/galeria-presidentes">Galeria dos Presidentes</Link></li>
              <li><Link to="/manuais">Manuais</Link></li>
              <li><Link to="/regulamentos">Regulamentos</Link></li>
              <li><Link to="/resoluções">Resoluções</Link></li>
              <li><Link to="/formularios">Formulários</Link></li>
              <li><Link to="/cursos">Cursos</Link></li>
              <li><Link to="#">Calendário</Link></li>
            </ul>
          </li>
            <Link to="/CBFS">CBFS</Link>
          <li className="dropdown">
            <Link to="/campeonatos">CAMPEONATOS</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">BID - Atletas</Link></li>
              <li><Link to="#">BID - Comissão técnica</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#">TRIBUNAL</Link>
            <ul className="dropdown-menu">
              <li><Link to="#">Documentos</Link></li>
              <li><Link to="#">Denúncia</Link></li>
              <li><Link to="#">Súmulas</Link></li>
              <li><Link to="#">Pleno</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="menu-right">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><i className="fas fa-search"></i></a>
      </div>
    </nav>
  );
};

export default Menu;
