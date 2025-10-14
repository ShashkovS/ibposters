import React from 'react';

const SLTable: React.FC = () => (
    <div>
        <h3 className="text-3xl font-bold font-roboto-slab text-center mb-4 text-gray-800">Standard Level (SL)</h3>
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
);

const HLTable: React.FC = () => (
    <div>
        <h3 className="text-3xl font-bold font-roboto-slab text-center mb-4 text-gray-800">Higher Level (HL)</h3>
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
);

const AssessmentOutline: React.FC = () => (
    <div className="mt-12">
        <h2 className="text-4xl font-bold font-roboto-slab text-center mb-6 text-gray-800">Assessment Outline</h2>
        <p className="text-center text-gray-600 mb-8 -mt-4 font-inter text-base">First assessment 2027</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <SLTable />
            <HLTable />
        </div>
    </div>
);

export default AssessmentOutline;