import React from 'react';

const SyllabusOverview: React.FC = () => (
    <div>
        <h2 className="text-4xl font-bold font-roboto-slab text-center mb-6 text-gray-800">Syllabus Overview</h2>
        <div className="border-2 border-gray-700">
            <table className="w-full text-base">
                <thead className="bg-gray-700 text-white">
                <tr>
                    <th className="w-1/2 px-4 py-3 text-left text-xl font-roboto-slab border-r border-gray-500">Theme A: Concepts of computer science</th>
                    <th className="w-1/2 px-4 py-3 text-left text-xl font-roboto-slab">Theme B: Computational thinking and problem-solving</th>
                </tr>
                </thead>
                <tbody className="divide-y-2 divide-gray-700">
                <tr className="align-top bg-white">
                    <td className="p-4 border-r-2 border-gray-700">
                        <p className="font-bold text-lg font-inter">A1 Computer fundamentals</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                            <li>A1.1 Computer hardware and operation</li>
                            <li>A1.2 Data representation and computer logic</li>
                            <li>A1.3 Operating systems and control systems</li>
                            <li>A1.4 Translation (HL only)</li>
                        </ul>
                    </td>
                    <td className="p-4">
                        <p className="font-bold text-lg font-inter">B1 Computational thinking</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                            <li>B1.1 Approaches to computational thinking</li>
                        </ul>
                    </td>
                </tr>
                <tr className="align-top bg-gray-50">
                    <td className="p-4 border-r-2 border-gray-700">
                        <p className="font-bold text-lg font-inter">A2 Networks</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                            <li>A2.1 Network fundamentals</li>
                            <li>A2.2 Network architecture</li>
                            <li>A2.3 Data transmissions</li>
                            <li>A2.4 Network security</li>
                        </ul>
                    </td>
                    <td className="p-4">
                        <p className="font-bold text-lg font-inter">B2 Programming</p>
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
                        <p className="font-bold text-lg font-inter">A3 Databases</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                            <li>A3.1 Database fundamentals</li>
                            <li>A3.2 Database design</li>
                            <li>A3.3 Database programming</li>
                            <li>A3.4 Alternative databases and data warehouses (HL only)</li>
                        </ul>
                    </td>
                    <td className="p-4">
                        <p className="font-bold text-lg font-inter">B3 Object-oriented programming</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                            <li>B3.1 Fundamentals of OOP for a single class</li>
                            <li>B3.2 Fundamentals of OOP for multiple classes (HL only)</li>
                        </ul>
                    </td>
                </tr>
                <tr className="align-top bg-gray-50">
                    <td className="p-4 border-r-2 border-gray-700">
                        <p className="font-bold text-lg font-inter">A4 Machine learning</p>
                        <ul className="list-disc list-inside mt-2 ml-4 space-y-2 text-base text-gray-800">
                            <li>A4.1 Machine learning fundamentals</li>
                            <li>A4.2 Data preprocessing (HL only)</li>
                            <li>A4.3 Machine learning approaches (HL only)</li>
                            <li>A4.4 Ethical considerations</li>
                        </ul>
                    </td>
                    <td className="p-4">
                        <p className="font-bold text-lg font-inter">B4 Abstract data types—HL only</p>
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

export default SyllabusOverview;