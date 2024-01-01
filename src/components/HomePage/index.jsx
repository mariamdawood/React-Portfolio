// /src/components/HomePage/index.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from '../About';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/about');
    }, [navigate]);

    return (
        <div>
            <Routes>
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default HomePage;