import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            setIsAuthenticated(true);  
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === 'admin@example.com' && password === 'admin123') {
            localStorage.setItem('authToken', 'admin-token');  
            setIsAuthenticated(true);  
            navigate('/dashboard');  
        } else {
            alert('Credenciais inválidas!');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');  
        setIsAuthenticated(false);  
        navigate('/login');  
    };

    return (
        <div className="login-container">
            {isAuthenticated ? (
                <div>
                    <h1>Bem-vindo ao Painel Administrativo</h1>
                    <button onClick={handleLogout} className="logout-btn">Sair</button>
                </div>
            ) : (
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login;
