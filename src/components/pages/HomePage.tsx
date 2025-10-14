import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <header className="text-center mb-12">
                <img src="https://leaders.tech/static/assets/the-island-logo-colors.86c3d674.svg" alt="The Island School Logo" className="h-24 mx-auto mb-4" />
                <h1 className="text-4xl font-bold font-roboto-slab text-gray-800">Computer Science & Design Posters</h1>
                <p className="text-lg text-gray-600 mt-2">Printable A3 Posters for the IB Classroom</p>
            </header>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold font-roboto-slab text-gray-700">IB DP Computer Science</h2>
                            <p className="text-gray-600 mt-2 mb-4">Syllabus & Assessment Outline</p>
                            <Link
                                to="/ib-dp-cs"
                                className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                View Poster
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold font-roboto-slab text-gray-700">IB Command Terms</h2>
                            <p className="text-gray-600 mt-2 mb-4">Definitions for DP and MYP</p>
                            <Link
                                to="/command-terms"
                                className="inline-block bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                View Posters
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-dashed border-gray-300 p-6">
                        <p className="text-gray-500 text-center">More posters coming soon...</p>
                    </div>
                </div>
            </main>
            <footer className="mt-12 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} The Island School. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;