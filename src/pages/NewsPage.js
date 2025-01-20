import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './NewsPage.css'; 

const NewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  
  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    const currentNews = storedNews.find(item => item.id.toString() === id);
    setNews(currentNews);
  }, [id]);

  if (!news) {
    return <p className="not-found">Notícia não encontrada.</p>;
  }

  return (
    <div className="news-page-container">
      <h1>{news.title}</h1>
      {news.image && <img src={news.image} alt="Imagem da Notícia" />}
      <p>{news.content}</p>
    </div>
  );
};

export default NewsPage;
