import React from "react";

const Login = ({ setIsAuthenticated }) => {
    const handleLogin = (e) => {
        e.preventDefault();
        // Implementar lógica de autenticación
        setIsAuthenticated(true);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Usuario:</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
