// src/app/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:3000";

export const register = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
