import React, { useEffect, useState } from 'react';

const Banners = () => {
  const [banners, setBanners] = useState([]);
  const [newBanner, setNewBanner] = useState({ title: '', image: null });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedBanners = JSON.parse(localStorage.getItem('banners')) || [];
    setBanners(storedBanners);
  }, []);

  const saveBanners = (updatedBanners) => {
    localStorage.setItem('banners', JSON.stringify(updatedBanners));
    setBanners(updatedBanners);
  };

  const handleAddBanner = () => {
    if (!newBanner.title || !newBanner.image) return;

    const imageURL = URL.createObjectURL(newBanner.image);

    const bannerWithImage = { ...newBanner, image: imageURL };

    const updatedBanners = [...banners, bannerWithImage];
    saveBanners(updatedBanners);
    setNewBanner({ title: '', image: null });
  };

  const handleEditBanner = (index) => {
    setNewBanner(banners[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleUpdateBanner = () => {
    const updatedBanners = [...banners];
    updatedBanners[editIndex] = newBanner;
    saveBanners(updatedBanners);
    setIsEditing(false);
    setNewBanner({ title: '', image: null });
    setEditIndex(null);
  };

  const handleDeleteBanner = (index) => {
    const updatedBanners = banners.filter((_, i) => i !== index);
    saveBanners(updatedBanners);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewBanner({ title: '', image: null });
    setEditIndex(null);
  };

  return (
    <div>
      <h1>{isEditing ? 'Editar Banner' : 'Criar Novo Banner'}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isEditing ? handleUpdateBanner() : handleAddBanner();
        }}
      >
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={newBanner.title}
            onChange={(e) => setNewBanner({ ...newBanner, title: e.target.value })}
            placeholder="Título do banner"
          />
        </div>
        <div>
          <label>Imagem:</label>
          <input
            type="file"
            onChange={(e) => setNewBanner({ ...newBanner, image: e.target.files[0] })}
          />
          {newBanner.image && <p>{newBanner.image.name}</p>}
        </div>
        <button type="submit">{isEditing ? 'Atualizar Banner' : 'Adicionar Banner'}</button>
        {isEditing && <button type="button" onClick={handleCancelEdit}>Cancelar</button>}
      </form>

      <h2>Lista de Banners</h2>
      {banners.length === 0 ? (
        <p>Não há banners cadastrados.</p>
      ) : (
        <ul>
          {banners.map((banner, index) => (
            <li key={index}>
              <div>
                <img
                  src={banner.image}
                  alt={`Banner ${index}`}
                  style={{ maxWidth: '100px' }}
                />
                <h3>{banner.title}</h3>
              </div>
              <button onClick={() => handleEditBanner(index)}>Editar</button>
              <button onClick={() => handleDeleteBanner(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Banners;
