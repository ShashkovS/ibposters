
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import IbDpCsPoster from './components/IbDpCsPoster';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ib-dp-cs-poster" element={<IbDpCsPoster />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
