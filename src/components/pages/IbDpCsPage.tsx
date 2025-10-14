import React from 'react';
import { Link } from 'react-router-dom';
import PosterLayout from '../common/PosterLayout.tsx';
import SyllabusOverview from '../posters/dp-cs/SyllabusOverview.tsx';
import AssessmentOutline from '../posters/dp-cs/AssessmentOutline.tsx';

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const PrintIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
);

const IbDpCsPage: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="p-4 bg-white shadow-md no-print flex justify-between items-center sticky top-0 z-10">
                <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    <BackIcon />
                    Back to Home
                </Link>
                <h1 className="text-lg font-bold font-roboto-slab text-gray-700 hidden md:block">IB DP Computer Science Poster</h1>
                <button
                    onClick={handlePrint}
                    className="flex items-center bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                    <PrintIcon />
                    Print A3
                </button>
            </div>

            <div className="p-4 sm:p-8 flex justify-center">
                <PosterLayout
                    title="IB DP Computer Science"
                    subtitle="Syllabus & Assessment At a Glance"
                >
                    <SyllabusOverview />
                    <AssessmentOutline />
                </PosterLayout>
            </div>
        </div>
    );
};

export default IbDpCsPage;