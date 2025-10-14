import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/src/components/pages/HomePage.tsx';
import IbDpCsPage from '@/src/components/pages/IbDpCsPage.tsx';

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ib-dp-cs" element={<IbDpCsPage />} />
            </Routes>
        </HashRouter>
    );
};

export default App;