import React from 'react';

const SyllabusOverview: React.FC = () => (
    <div>
        <h2 className="text-4xl font-bold font-roboto-slab text-center mb-6 text-gray-800 print:text-3xl print:mb-3">Syllabus Overview</h2>
        <div className="border-2 border-gray-700">
            <table className="w-full text-base print:text-sm">
                <thead className="bg-gray-700 text-white">
                <tr>
                    <th className="w-1/2 px-4 py-3 text-left text-xl font-roboto-slab border-r border-gray-500 print:py-2 print:text-base">Theme A: Concepts of computer science</th>
                    <th className="w-1/2 px-4 py-3 text-left text-xl font-roboto-slab print:py-2 print:text-base">Theme B: Computational thinking and problem-solving</th>
                </tr>
                </thead>
                <tbody className="divide-y-2 divide-gray-700">
                <tr className="align-top bg-white">
                    <td className="p-4 border-r-2 border-gray-700 print:p-2">
                        <p className="font-bold text-lg font-inter print:text-base">A1 Computer fundamentals</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800 print:space-y-1 print:text-xs">
                            <li>A1.1 Computer hardware and operation</li>
                            <li>A1.2 Data representation and computer logic</li>
                            <li>A1.3 Operating systems and control systems</li>
                            <li>A1.4 Translation (HL only)</li>
                        </ul>
                    </td>
                    <td className="p-4 print:p-2">
                        <p className="font-bold text-lg font-inter print:text-base">B1 Computational thinking</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800 print:space-y-1 print:text-xs">
                            <li>B1.1 Approaches to computational thinking</li>
                        </ul>
                    </td>
                </tr>
                <tr className="align-top bg-gray-50">
                    <td className="p-4 border-r-2 border-gray-700 print:p-2">
                        <p className="font-bold text-lg font-inter print:text-base">A2 Networks</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800 print:space-y-1 print:text-xs">
                            <li>A2.1 Network fundamentals</li>
                            <li>A2.2 Network architecture</li>
                            <li>A2.3 Data transmissions</li>
                            <li>A2.4 Network security</li>
                        </ul>
                    </td>
                    <td className="p-4 print:p-2">
                        <p className="font-bold text-lg font-inter print:text-base">B2 Programming</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800 print:space-y-1 print:text-xs">
                            <li>B2.1 Programming fundamentals</li>
                            <li>B2.2 Data structures</li>
                            <li>B2.3 Programming constructs</li>
                            <li>B2.4 Programming algorithms</li>
                            <li>B2.5 File processing</li>
                        </ul>
                    </td>
                </tr>
                <tr className="align-top bg-white">
                    <td className="p-4 border-r-2 border-gray-700 print:p-2">
                        <p className="font-bold text-lg font-inter print:text-base">A3 Databases</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800 print:space-y-1 print:text-xs">
                            <li>A3.1 Database fundamentals</li>
                            <li>A3.2 Database design</li>
                            <li>A3.3 Database programming</li>
                            <li>A3.4 Alternative databases and data warehouses (HL only)</li>
                        </ul>
                    </td>
                    <td className="p-4 print:p-2">
                        <p className="font-bold text-lg font-inter print:text-base">B3 Object-oriented programming</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800 print:space-y-1 print:text-xs">
                            <li>B3.1 Fundamentals of OOP for a single class</li>
                            <li>B3.2 Fundamentals of OOP for multiple classes (HL only)</li>
                        </ul>
                    </td>
                </tr>
                <tr className="align-top bg-gray-50">
                    <td className="p-4 border-r-2 border-gray-700 print:p-2">
                        <p className="font-bold text-lg font-inter print:text-base">A4 Machine learning</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800 print:space-y-1 print:text-xs">
                            <li>A4.1 Machine learning fundamentals</li>
                            <li>A4.2 Data preprocessing (HL only)</li>
                            <li>A4.3 Machine learning approaches (HL only)</li>
                            <li>A4.4 Ethical considerations</li>
                        </ul>
                    </td>
                    <td className="p-4 print:p-2">
                        <p className="font-bold text-lg font-inter print:text-base">B4 Abstract data types—HL only</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800 print:space-y-1 print:text-xs">
                            <li>B4.1 Fundamentals of ADTs</li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default SyllabusOverview;