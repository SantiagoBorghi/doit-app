import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Login from "./app/pages/login";
import Home from "./app/pages/home";
import Register from "./app/pages/register";
import Profile from "./app/pages/profile";
import "./App.css";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={<Login setIsAuthenticated={setIsAuthenticated} />}
                />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/home"
                    element={
                        isAuthenticated ? <Home /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/profile"
                    element={
                        isAuthenticated ? <Profile /> : <Navigate to="/login" />
                    }
                />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
