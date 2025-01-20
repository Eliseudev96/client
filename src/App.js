import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './pages/Login';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import NewsPage from './pages/NewsPage';  
import Banners from './pages/Banners';
import Games from './pages/Games';
import Videos from './pages/Videos';
import Users from './pages/Users';
import Menu from './components/Menu/menu';  
import NossaHistoria from './pages/NossaHistoria'; 
import GaleriaPresidentes from './pages/GaleriaPresidentes';
import ManualsSection from './pages/ManualsSection';
import Footer from './components/footer/footer';
import Regulamentos from './pages/Regulamentos';
import Resoluções from './pages/Resoluções';
import Formularios from './pages/Formularios';
import Cursos from './pages/Cursos';
import Regras from './pages/Regras';
import CBFS from './pages/CBFS';
import Campeonatos from './pages/Campeonatos';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/news/:id" element={<><Menu /><NewsPage /></>} />
                <Route path="/" element={<AdminLayout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="news" element={<News />} />
                    <Route path="banners" element={<Banners />} />
                    <Route path="games" element={<Games />} />
                    <Route path="videos" element={<Videos />} />
                    <Route path="users" element={<Users />} />
                </Route>
                <Route path="/nossa-historia" element={<><Menu /><NossaHistoria /><Footer/></>} /> 
                <Route path="/galeria-presidentes" element={<><Menu /><GaleriaPresidentes /><Footer/></>} />
                <Route path="/manuais" element={<><Menu /><ManualsSection /><Footer/></>} />
                <Route path="/regulamentos" element={<><Menu /><Regulamentos /><Footer/></>} />
                <Route path="/resoluções" element={<><Menu /><Resoluções /><Footer/></>} />
                <Route path="/formularios" element={<><Menu /><Formularios /><Footer/></>} />
                <Route path="/cursos" element={<><Menu /><Cursos /><Footer/></>} />
                <Route path="/regras" element={<><Menu /><Regras /><Footer/></>} />
                <Route path="/CBFS" element={<><Menu /><CBFS /><Footer/></>} />
                <Route path="/Campeonatos" element={<><Menu /><Campeonatos /><Footer/></>} />
            </Routes>
        </Router>
    );
}

export default App;
