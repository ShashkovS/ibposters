import React from 'react';

interface PosterLayoutProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const PosterLayout: React.FC<PosterLayoutProps> = ({ title, subtitle, children }) => {
    return (
        <div
            className="printable-poster bg-white shadow-2xl p-6"
            style={{ width: '29.7cm', minHeight: '42cm', display: 'flex', flexDirection: 'column' }}
        >
            <header className="flex justify-between items-center border-b-4 border-gray-800 pb-4 mb-6">
                <div>
                    <h1 className="text-5xl font-extrabold font-roboto-slab text-gray-800">{title}</h1>
                    <p className="text-lg text-gray-600 font-inter">{subtitle}</p>
                </div>
                <img src="https://leaders.tech/static/assets/the-island-logo-colors.86c3d674.svg" alt="The Island School Logo" className="h-20 flex-shrink-0" />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="mt-auto pt-4 text-center text-xs text-gray-500 border-t-2 border-gray-300">
                <p>The Island School | Computer Science & Design Department</p>
            </footer>
        </div>
    );
};

export default PosterLayout;