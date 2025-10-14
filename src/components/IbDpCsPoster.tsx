
import React from 'react';
import { Link } from 'react-router-dom';

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

const CurriculumTable: React.FC = () => (
    <div>
        <h2 className="text-4xl font-bold font-['Roboto_Slab'] text-center mb-6 text-gray-800">Syllabus Overview</h2>
        <div className="border-2 border-gray-700">
            <table className="w-full text-base">
                <thead className="bg-gray-700 text-white">
                    <tr>
                        <th className="w-1/2 px-4 py-3 text-left text-xl font-['Roboto_Slab'] border-r border-gray-500">Theme A: Concepts of computer science</th>
                        <th className="w-1/2 px-4 py-3 text-left text-xl font-['Roboto_Slab']">Theme B: Computational thinking and problem-solving</th>
                    </tr>
                </thead>
                <tbody className="divide-y-2 divide-gray-700">
                    <tr className="align-top bg-white">
                        <td className="p-4 border-r-2 border-gray-700">
                            <p className="font-bold text-lg font-['Inter']">A1 Computer fundamentals</p>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                                <li>A1.1 Computer hardware and operation</li>
                                <li>A1.2 Data representation and computer logic</li>
                                <li>A1.3 Operating systems and control systems</li>
                                <li>A1.4 Translation (HL only)</li>
                            </ul>
                        </td>
                        <td className="p-4">
                            <p className="font-bold text-lg font-['Inter']">B1 Computational thinking</p>
                             <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                                <li>B1.1 Approaches to computational thinking</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="align-top bg-gray-50">
                        <td className="p-4 border-r-2 border-gray-700">
                            <p className="font-bold text-lg font-['Inter']">A2 Networks</p>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                                <li>A2.1 Network fundamentals</li>
                                <li>A2.2 Network architecture</li>
                                <li>A2.3 Data transmissions</li>
                                <li>A2.4 Network security</li>
                            </ul>
                        </td>
                        <td className="p-4">
                            <p className="font-bold text-lg font-['Inter']">B2 Programming</p>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                                <li>B2.1 Programming fundamentals</li>
                                <li>B2.2 Data structures</li>
                                <li>B2.3 Programming constructs</li>
                                <li>B2.4 Programming algorithms</li>
                                <li>B2.5 File processing</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="align-top bg-white">
                        <td className="p-4 border-r-2 border-gray-700">
                            <p className="font-bold text-lg font-['Inter']">A3 Databases</p>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                                <li>A3.1 Database fundamentals</li>
                                <li>A3.2 Database design</li>
                                <li>A3.3 Database programming</li>
                                <li>A3.4 Alternative databases and data warehouses (HL only)</li>
                            </ul>
                        </td>
                        <td className="p-4">
                            <p className="font-bold text-lg font-['Inter']">B3 Object-oriented programming</p>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                                <li>B3.1 Fundamentals of OOP for a single class</li>
                                <li>B3.2 Fundamentals of OOP for multiple classes (HL only)</li>
                            </ul>
                        </td>
                    </tr>
                    <tr className="align-top bg-gray-50">
                        <td className="p-4 border-r-2 border-gray-700">
                             <p className="font-bold text-lg font-['Inter']">A4 Machine learning</p>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                                <li>A4.1 Machine learning fundamentals</li>
                                <li>A4.2 Data preprocessing (HL only)</li>
                                <li>A4.3 Machine learning approaches (HL only)</li>
                                <li>A4.4 Ethical considerations</li>
                            </ul>
                        </td>
                        <td className="p-4">
                            <p className="font-bold text-lg font-['Inter']">B4 Abstract data types—HL only</p>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                                <li>B4.1 Fundamentals of ADTs</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

const AssessmentTables: React.FC = () => (
    <div className="mt-12">
        <h2 className="text-4xl font-bold font-['Roboto_Slab'] text-center mb-6 text-gray-800">Assessment Outline</h2>
        <p className="text-center text-gray-600 mb-8 -mt-4 font-['Inter'] text-base">First assessment 2027</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* SL Table */}
            <div>
                <h3 className="text-3xl font-bold font-['Roboto_Slab'] text-center mb-4 text-gray-800">Standard Level (SL)</h3>
                 <table className="w-full text-base">
                    <thead>
                        <tr className="border-b-2 border-black">
                            <th className="p-3 text-left font-bold text-lg w-3/4">Assessment component</th>
                            <th className="p-3 text-right font-bold text-lg w-1/4">Weighting</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-300">
                            <td className="p-3 font-bold align-top">External assessment (2 hours 30 minutes)</td>
                            <td className="p-3 font-bold text-right align-top">70%</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="p-3 align-top">
                                <p className="font-bold">Paper 1 (1 hour 15 minutes)</p>
                                <div className="text-sm text-gray-700 mt-2 pl-4">
                                    <p>Section A—extended response questions linked to theme A: Concepts of computer science</p>
                                    <p className="mt-1">Section B—short-response questions linked to the pre-seen case study</p>
                                    <p className="text-right italic mt-1">(50 marks)</p>
                                </div>
                            </td>
                            <td className="p-3 font-bold text-right align-top">35%</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="p-3 align-top">
                                <p className="font-bold">Paper 2 (1 hour 15 minutes)</p>
                                <div className="text-sm text-gray-700 mt-2 pl-4">
                                    <p>Extended response questions linked to theme B: Computational thinking and problem-solving</p>
                                    <p className="text-right italic mt-1">(50 marks)</p>
                                </div>
                            </td>
                            <td className="p-3 font-bold text-right align-top">35%</td>
                        </tr>
                         <tr className="border-b border-gray-300">
                            <td className="p-3 font-bold align-top">Internal assessment (35 hours)</td>
                            <td className="p-3 font-bold text-right align-top">30%</td>
                        </tr>
                        <tr>
                            <td className="p-3 align-top" colSpan={2}>
                                <div className="text-sm text-gray-700">
                                    <p>This component is internally assessed by the teacher and externally moderated by the IB at the end of the course.</p>
                                    <p className="mt-1">IA consists of one task: the computational solution</p>
                                    <p className="text-right italic mt-1">(30 marks)</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* HL Table */}
            <div>
                 <h3 className="text-3xl font-bold font-['Roboto_Slab'] text-center mb-4 text-gray-800">Higher Level (HL)</h3>
                 <table className="w-full text-base">
                    <thead>
                        <tr className="border-b-2 border-black">
                            <th className="p-3 text-left font-bold text-lg w-3/4">Assessment component</th>
                            <th className="p-3 text-right font-bold text-lg w-1/4">Weighting</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-300">
                            <td className="p-3 font-bold align-top">External assessment (4 hours)</td>
                            <td className="p-3 font-bold text-right align-top">80%</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="p-3 align-top">
                                <p className="font-bold">Paper 1 (2 hours)</p>
                                <div className="text-sm text-gray-700 mt-2 pl-4">
                                    <p>Section A—extended-response questions linked to theme A: Concepts of computer science</p>
                                    <p className="mt-1">Section B—short- and extended-response questions linked to the pre-seen case study</p>
                                    <p className="text-right italic mt-1">(80 marks)</p>
                                </div>
                            </td>
                            <td className="p-3 font-bold text-right align-top">40%</td>
                        </tr>
                        <tr className="border-b border-gray-300">
                            <td className="p-3 align-top">
                                <p className="font-bold">Paper 2 (2 hours)</p>
                                <div className="text-sm text-gray-700 mt-2 pl-4">
                                    <p>Extended-response questions linked to theme B: Computational thinking and problem-solving</p>
                                    <p className="text-right italic mt-1">(80 marks)</p>
                                </div>
                            </td>
                            <td className="p-3 font-bold text-right align-top">40%</td>
                        </tr>
                         <tr className="border-b border-gray-300">
                            <td className="p-3 font-bold align-top">Internal assessment (35 hours)</td>
                            <td className="p-3 font-bold text-right align-top">20%</td>
                        </tr>
                        <tr>
                            <td className="p-3 align-top" colSpan={2}>
                                <div className="text-sm text-gray-700">
                                    <p>This component is internally assessed by the teacher and externally moderated by the IB at the end of the course.</p>
                                    <p className="mt-1">IA consists of one task: the computational solution</p>
                                    <p className="text-right italic mt-1">(30 marks)</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);


const IbDpCsPoster: React.FC = () => {
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
                <h1 className="text-lg font-bold font-['Roboto_Slab'] text-gray-700 hidden md:block">IB DP Computer Science Poster</h1>
                <button 
                    onClick={handlePrint} 
                    className="flex items-center bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                    <PrintIcon />
                    Print A3
                </button>
            </div>

            <div className="p-4 sm:p-8 flex justify-center">
                <div className="printable-poster bg-white shadow-2xl p-6" style={{ width: '29.7cm', minHeight: '42cm', display: 'flex', flexDirection: 'column' }}>
                    <header className="flex justify-between items-center border-b-4 border-gray-800 pb-4 mb-6">
                        <div>
                            <h1 className="text-5xl font-extrabold font-['Roboto_Slab'] text-gray-800">IB DP Computer Science</h1>
                            <p className="text-lg text-gray-600 font-['Inter']">Syllabus & Assessment At a Glance</p>
                        </div>
                        <img src="https://leaders.tech/static/assets/the-island-logo-colors.86c3d674.svg" alt="The Island School Logo" className="h-20 flex-shrink-0" />
                    </header>
                    <main className="flex-grow">
                        <CurriculumTable />
                        <AssessmentTables />
                    </main>
                    <footer className="mt-auto pt-4 text-center text-xs text-gray-500 border-t-2 border-gray-300">
                       <p>The Island School | Computer Science & Design Department</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default IbDpCsPoster;
