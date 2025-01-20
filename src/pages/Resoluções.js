import React from "react";
import "./Resoluções.css"; 

const resolucoes = [
  { titulo: "Resolução 001/2017", descricao: "Ref: RESOLUÇÃO 001-2017 PUNIÇÃO CLUBES DESISTENTES", link: "#" },
  { titulo: "Resolução 001/2019", descricao: "Ref: Regulamenta o trabalho dos oficiais de arbitragem devidamente inscritos na FPFS", link: "#" },
  { titulo: "Resolução 002/2019", descricao: "Ref: Nomeia cargo 2º Vice-Presidente", link: "#" },
  { titulo: "Resolução 003/2019", descricao: "Ref: Nomeia cargo 3º Vice-Presidente", link: "#" },
  { titulo: "Resolução 004/2019", descricao: "Ref: Nomeia cargo Assessor Jurídico", link: "#" },
  { titulo: "Resolução 005/2019", descricao: "Ref: Nomeia cargo Assessor Especial", link: "#" },
  { titulo: "Resolução 006/2019", descricao: "Ref: Nomeia cargo Superintendente", link: "#" },
  { titulo: "Resolução 007/2019", descricao: "Ref: Nomeia cargo 1º Vice-Presidente", link: "#" },
  { titulo: "Resolução 008/2019", descricao: "Ref: Nomeia cargo Diretora de Arbitragem Estadual Feminino", link: "#" },
  { titulo: "Resolução 009/2019", descricao: "Ref: Nomeia cargo Colaboradora de Arbitragem Estadual Feminino", link: "#" },
  { titulo: "Resolução 010/2019", descricao: "Ref: Nomeia cargo Diretor de Arbitragem dos Jogos do Governo do PR", link: "#" },
  { titulo: "Resolução 011/2019", descricao: "Ref: Nomeia cargo Colaborador de Arbitragem dos Jogos do Governo do PR", link: "#" },
  { titulo: "Resolução 030/2019", descricao: "Ref: Substituição Goleiro Lesionado", link: "#" },
  { titulo: "Resolução 031/2019", descricao: "Ref: Suspensão Automática", link: "#" },
  { titulo: "Resolução 032/2019", descricao: "Ref: Cartões Amarelos Série Prata", link: "#" },
  { titulo: "Resolução 033/2019", descricao: "Ref: Proibição Terceirização Escala Arbitragem", link: "#" },
  { titulo: "Resolução 034/2019", descricao: "Ref: Obrigatoriedade de placas centrais", link: "#" },
  { titulo: "Resolução 035/2019", descricao: "Ref: Supervisor de clubes", link: "#" },
  { titulo: "Resolução 036/2019", descricao: "Ref: Autorização competição mista feminino", link: "#" },
  { titulo: "Resolução 037/2019", descricao: "Ref: Prorrogação prazo feminino", link: "#" },
  { titulo: "Resolução 038/2019", descricao: "Ref: FPFS - Assofutsal escalas de arbitragem", link: "#" },
  { titulo: "Resolução 039/2019", descricao: "Ref: Vedação de Disputa de Competições não Oficiais", link: "#" },
  { titulo: "Resolução 001/2020", descricao: "Ref: Adendo Banco de Reservas", link: "#" },
  { titulo: "Resolução 002/2020", descricao: "Ref: Suspensão Corona Vírus - COVID-19", link: "#" },
  { titulo: "Resolução 003/2020", descricao: "Ref: Categorias de Base Cancelamento Sub7 ao Sub-17", link: "#" },
  { titulo: "Resolução 005/2020", descricao: "Ref: Transferências Séries Antes Competição", link: "#" },
  { titulo: "Resolução 006/2020", descricao: "Ref: Cancelamento Taça FPFS 2020", link: "#" },
  { titulo: "Resolução 001/2021", descricao: "Ref: Nomeia Diretor Séries", link: "#" },
  { titulo: "Resolução 002/2021", descricao: "Ref: Nomeia Diretor Base", link: "#" },
  { titulo: "Resolução 003/2021", descricao: "Ref: Nomeia Vice-Presidente de Arbitragem", link: "#" },
  { titulo: "Resolução 004/2021", descricao: "Ref: Nomeia Diretor de Arbitragem", link: "#" },
  { titulo: "Resolução 005/2021", descricao: "Ref: Nomeia Professor da Escola de Arbitragem", link: "#" },
  { titulo: "Resolução 006/2021", descricao: "Ref: Nomeia Embaixador", link: "#" },
  { titulo: "Resolução 008/2021", descricao: "Ref: NOMEAÇÃO DE CARLOS DE PAULA COMISSÃO", link: "#" },
  { titulo: "Resolução 009/2021", descricao: "Ref: NOMEAÇÃO DE GUILHERME RAMIDOFF COMISSÃO", link: "#" },
  { titulo: "Resolução 010/2021", descricao: "Ref: NOMEAÇÃO DE RICHARD TOMAL FILHO COMISSÃO", link: "#" },
  { titulo: "Resolução 011/2021", descricao: "Ref: AUTORIZAÇÃO COMPETIÇÃO MISTA FEMININO", link: "#" },
  { titulo: "Resolução 012/2021", descricao: "Ref: AUTORIZAÇÃO COMPETIÇÃO MISTA FEMININO", link: "#" },
  { titulo: "Resolução 013/2021", descricao: "Ref: PRESENÇA PESSOAS GINÁSIO URGENTE", link: "#" },
  { titulo: "Resolução 002/2022", descricao: "Ref: NOMEAÇÃO RICARDO CSEH DIRETOR ARBITRAGEM FEMININO", link: "#" },
  { titulo: "Resolução 001/2023", descricao: "Ref: Nomeação Luis Henrique Antonievicz", link: "#" },
  { titulo: "Resolução 002/2023", descricao: "Ref: Nomeação Eduardo de Vargas Neto", link: "#" },
  { titulo: "Resolução 003/2023", descricao: "Ref: Nomeação Cristiano Barros Homem d’El Rei", link: "#" },
  { titulo: "Resolução 004/2023", descricao: "Ref: Nomeação Osmar Saydelles de Lima", link: "#" },
  { titulo: "Resolução 005/2023", descricao: "Ref: Nomeação Ednei Custodio da Silva", link: "#" },
  { titulo: "Resolução 006/2023", descricao: "Ref: Nomeação Claudio Teixeira Lombardi", link: "#" },
  { titulo: "Resolução 007/2023", descricao: "Ref: Nomeação Katiucia Meneguzzi dos Santos", link: "#" },
];

const Resolucoes = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-overlay" />
        <h1 className="banner-title">Resoluções</h1>
      </div>
      <div className="resolucoes-container">
        <h2 className="resolucoes-subtitulo">Resoluções da Diretoria</h2>
        <ul className="resolucoes-lista">
          {resolucoes.map((resolucao, index) => (
            <li key={index} className="resolucao-item">
              <a href={resolucao.link}>
                {resolucao.titulo} - {resolucao.descricao}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resolucoes;
