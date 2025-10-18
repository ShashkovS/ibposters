import React from 'react';
import {Link} from 'react-router-dom';
import TwoTermsPoster from '../posters/command-terms/TwoTermsPoster';
import {commandTermsData} from '../../data/commandTerms';

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
    </svg>
);

const PrintIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
         stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
    </svg>
);

const CommandTermsPage: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    // Group terms into pairs for printing
    const termPairs = [];
    for (let i = 0; i < commandTermsData.length; i += 2) {
        termPairs.push([commandTermsData[i], commandTermsData[i + 1] || null]);
    }

    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                <div className="p-4 bg-white shadow-md no-print flex justify-between items-center sticky top-0 z-10">
                    <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                        <BackIcon/>
                        Back to Home
                    </Link>
                    <h1 className="text-lg font-bold font-roboto-slab text-gray-700 hidden md:block">IB Command Terms
                        Posters</h1>
                    <button
                        onClick={handlePrint}
                        className="flex items-center bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        <PrintIcon/>
                        Print All (A3 Landscape)
                    </button>
                </div>

                {termPairs.map((pair, index) => (
                    <div className="p-4 sm:p-8 flex flex-col items-center page-break">
                        <div key={index} className="mb-8 print:mb-0">
                            <TwoTermsPoster termPair={pair}/>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default CommandTermsPage;