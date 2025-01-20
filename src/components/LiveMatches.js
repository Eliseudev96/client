import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import './LastMatches.css';

const LastMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMatches = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/jogos");
      if (response.status === 200) {
        const responseData = response.data;
        console.log("Dados recebidos:", responseData);

        if (Array.isArray(responseData.data)) {
          // Adicionando siglas manualmente (caso não venham da API)
          const formattedMatches = responseData.data.slice(0, 5).map((match) => ({
            ...match,
            Sigla_TimeA: match.TimeA.substring(0, 3).toUpperCase(),
            Sigla_TimeB: match.TimeB.substring(0, 3).toUpperCase(),
          }));
          setMatches(formattedMatches);
        } else {
          console.error("A propriedade 'data' não é um array:", responseData.data);
        }
      } else {
        console.error("Erro ao buscar jogos:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  if (loading) {
    return <p className="lastmatches-loading">Carregando dados...</p>;
  }

  return (
    <div className="lastmatches-container">
      {matches.length === 0 ? (
        <p className="no-matches">Nenhuma partida encontrada.</p>
      ) : (
        matches.map((match) => (
          <div key={match.ID} className="lastmatches-item">
            <p className="lastmatches-item-details">
              {match.Dia_Semana}, {match.Data} - {match.Hora}
            </p>
            <div className="team-info">
              <img
                src={match.Escudo_TimeA}
                alt={match.TimeA}
                className="lastmatches-item-img"
              />
              <span className="lastmatches-item-name">{match.Sigla_TimeA}</span>
            </div>
            <div className="score">
              <strong className={`lastmatches-item-score ${!match.GolsA && !match.GolsB ? 'no-result' : ''}`}>
                {match.GolsA ?? "-"} - {match.GolsB ?? "-"}
              </strong>
            </div>
            <div className="team-info">
              <span className="lastmatches-item-name">{match.Sigla_TimeB}</span>
              <img
                src={match.Escudo_TimeB}
                alt={match.TimeB}
                className="lastmatches-item-img"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default LastMatches;
