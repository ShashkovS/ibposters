import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import IbDpCsPage from './components/pages/IbDpCsPage';
import CommandTermsPage from './components/pages/CommandTermsPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ib-dp-cs" element={<IbDpCsPage />} />
                <Route path="/command-terms" element={<CommandTermsPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;