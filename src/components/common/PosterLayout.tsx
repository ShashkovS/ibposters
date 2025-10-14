import React from 'react';

interface PosterLayoutProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const PosterLayout: React.FC<PosterLayoutProps> = ({ title, subtitle, children }) => {
    return (
        <div
            className="printable-poster bg-white shadow-2xl p-6 w-[29.7cm] min-h-[42cm] flex flex-col print:shadow-none print:p-0"
        >
            <header className="flex justify-between items-center border-b-4 border-gray-800 pb-4 mb-6 print:mb-4">
                <div>
                    <h1 className="text-5xl font-extrabold font-roboto-slab text-gray-800 print:text-4xl">{title}</h1>
                    <p className="text-lg text-gray-600 font-inter print:text-base">{subtitle}</p>
                </div>
                <img src="https://leaders.tech/static/assets/the-island-logo-colors.86c3d674.svg" alt="The Island School Logo" className="h-20 flex-shrink-0 print:h-16" />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="mt-auto pt-4 text-center text-xs text-gray-500 border-t-2 border-gray-300 print:pt-2">
                <p>The Island School | Computer Science & Design Department</p>
            </footer>
        </div>
    );
};

export default PosterLayout;