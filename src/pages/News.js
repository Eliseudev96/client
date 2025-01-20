import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);  
  const [news, setNews] = useState([]);
  const [editIndex, setEditIndex] = useState(null);  

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    setNews(storedNews);
  }, []);

  const handleAddOrEditNews = (e) => {
    e.preventDefault();

    if (title && content) {
      const newNews = {
        title,
        content,
        image,
        id: new Date().getTime(), 
      };

      let updatedNews = [...news];

      if (editIndex !== null) {
        updatedNews[editIndex] = newNews;
      } else {
        updatedNews.push(newNews);
      }

      setNews(updatedNews);
      localStorage.setItem('news', JSON.stringify(updatedNews));

      setTitle('');
      setContent('');
      setImage(null);
      setEditIndex(null);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleDeleteNews = (index) => {
    const updatedNews = news.filter((_, i) => i !== index);
    setNews(updatedNews);
    localStorage.setItem('news', JSON.stringify(updatedNews));
  };

  const handleEditNews = (index) => {
    const newsToEdit = news[index];
    setTitle(newsToEdit.title);
    setContent(newsToEdit.content);
    setImage(newsToEdit.image);
    setEditIndex(index);  
  };

  const handleCancelEdit = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setEditIndex(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);  
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Gerenciamento de Notícias</h1>

      <form onSubmit={handleAddOrEditNews}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
        />
        {image && <img src={image} alt="Imagem da Notícia" width="100" height="100" />}  
        <button type="submit">{editIndex !== null ? 'Editar Notícia' : 'Adicionar Notícia'}</button>
        {editIndex !== null && (
          <button type="button" onClick={handleCancelEdit}>Cancelar</button> 
        )}
      </form>

      <h2>Últimas Notícias</h2>
      {news.length === 0 ? (
        <p>Não há notícias disponíveis.</p>
      ) : (
        <ul>
          {news.map((item, index) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              {item.image && <img src={item.image} alt="Imagem da Notícia" width="100" height="100" />}
              <div>
                <Link to={`/news/${item.id}`}>Ver Detalhes</Link>  
                <button onClick={() => handleEditNews(index)}>Editar</button>
                <button onClick={() => handleDeleteNews(index)}>Excluir</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
