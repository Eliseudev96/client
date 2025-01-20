import React from "react";
import { Link } from "react-router-dom";
import "./CBFS.css";

function CBFS() {
  return (
    <div className="containerCBFS">
      <h1>POR DENTRO DA CBFS</h1>
      <ul className="link-list">
        <li>
          <Link to="/regras" className="link">Regras Oficiais</Link>
        </li>
        <li>
          <Link to="#" className="link">Comunicados</Link>
        </li>
        <li>
          <Link to="#" className="link">Notícias</Link>
        </li>
      </ul>
    </div>
  );
}

export default CBFS;
