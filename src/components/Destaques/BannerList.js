import React, { useEffect, useState } from 'react';
import './BannerList.css';

const BannerList = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const storedBanners = JSON.parse(localStorage.getItem('banners')) || [];
    setBanners(storedBanners);
  }, []);

  return (
    <div className="banner-container">
      <h2 className="banner-title">Destaques</h2>
      {banners.length === 0 ? (
        <p>Não há banners para exibir.</p>
      ) : (
        <div className="banner-grid">
          {banners.length > 0 && (
            <div className="banner-main">
              <div className="banner-main-image-container">
                <img
                  src={banners[0].image}
                  alt={banners[0].title}
                  className="banner-main-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/images/default-banner.jpg'; 
                  }}
                />
              </div>
              <div className="banner-main-content">
                <h3 className="banner-main-title">{banners[0].title}</h3>
                <p className="banner-main-description">{banners[0].description}</p>
              </div>
            </div>
          )}
          <div className="banner-secondary">
            {banners.slice(1).map((banner, index) => (
              <div className="banner-item" key={index}>
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="banner-secondary-image"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/images/default-banner.jpg'; 
                  }}
                />
                <h4 className="banner-item-title">{banner.title}</h4>
                <p className="banner-item-description">{banner.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerList;
