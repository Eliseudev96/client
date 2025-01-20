import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');  
        navigate('/login');
    };

    return (
        <div className="sidebar">
            <h2>Painel Admin</h2>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/news">Notícias</Link></li>
                <li><Link to="/banners">Destaques</Link></li>
                <li><Link to="/games">Jogos</Link></li>
                <li><Link to="/videos">Vídeos</Link></li>
                <li><Link to="/users">Usuários</Link></li>
            </ul>
            <button onClick={handleLogout} className="logout-button">Sair</button>
        </div>
    );
};

export default Sidebar;
