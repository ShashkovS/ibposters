import React from 'react';
import { TechTipData } from '../../../data/techTipsData';

interface TechTipPosterProps {
    data: TechTipData;
}

const TechTipPoster: React.FC<TechTipPosterProps> = ({ data }) => {
    const { title, subtitle, colorScheme, tips } = data;

    // Dynamically set grid rows based on number of tips for better spacing
    const gridRowsClass = () => {
        if (tips.length <= 12) return 'grid-rows-6';
        if (tips.length <= 14) return 'grid-rows-7';
        return 'grid-rows-8'; // Default for 16 or more
    };

    return (
        <div className="printable-poster flex flex-col bg-white w-[29.7cm] min-h-[42cm] shadow-lg print:shadow-none page-break">
            {/* Header */}
            <header className={`p-8 ${colorScheme.headerBg} ${colorScheme.headerText}`}>
                <h1 className="text-7xl font-extrabold font-roboto-slab">{title}</h1>
                <p className="text-2xl font-sans mt-2">{subtitle}</p>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-8">
                <div className={`grid grid-cols-2 gap-x-10 gap-y-6 h-full ${gridRowsClass()}`}>
                    {tips.map((tip) => (
                        <div key={tip.name} className="flex flex-col">
                            <h3 className={`text-4xl font-bold font-roboto-slab ${colorScheme.accentText}`}>{tip.name}</h3>
                            <p className="text-2xl text-gray-600 mt-2 flex-grow">{tip.description}</p>
                            <div className="mt-2">
                                <code className={`px-4 py-2 rounded-md text-3xl font-semibold ${colorScheme.shortcutBg} ${colorScheme.shortcutText}`}>
                                    {tip.shortcut}
                                </code>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-auto p-4 text-center text-sm text-gray-500 border-t-2 border-gray-200">
                The Island School | Computer Science & Design Department
            </footer>
        </div>
    );
};

export default TechTipPoster;