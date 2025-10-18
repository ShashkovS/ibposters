import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import IbDpCsPage from './components/pages/IbDpCsPage';
import CommandTermsPage from './components/pages/CommandTermsPage';
import TechTipsPage from './components/pages/TechTipsPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ib-dp-cs" element={<IbDpCsPage />} />
                <Route path="/command-terms" element={<CommandTermsPage />} />
                <Route path="/tech-tips" element={<TechTipsPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;