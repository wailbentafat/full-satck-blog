// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

// Create the context with default values
const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});

// Provider component
export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));

    // Function to handle login
    const login = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    // Function to handle logout
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    // Determine if the user is authenticated
    const isAuthenticated = Boolean(token);

    // Provide context values
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
