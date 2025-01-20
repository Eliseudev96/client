import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ShowNews.css';

const ShowNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    setNews(storedNews);
  }, []);

  return (
    <div className="news-container">
      {news.length === 0 ? (
        <p className="no-news">Não há notícias disponíveis.</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0} 
          slidesPerView={2} 
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 1, 
            },
            768: {
              slidesPerView: 2, 
            },
          }}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="news-slide">
                <Link to={`/news/${item.id}`}> 
                  {item.image && (
                    <img src={item.image} alt={item.title} className="news-image" />
                  )}
                  <div className="news-content">
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-date">{item.date || 'Há alguns dias'}</p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ShowNews;
