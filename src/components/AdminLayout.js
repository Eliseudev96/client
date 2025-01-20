import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from './SideBar/Sidebar';

const AdminLayout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('authToken');  
            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        return <div>Carregando...</div>;
    }

    return isAuthenticated ? (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/login" />
    );
};

export default AdminLayout;
