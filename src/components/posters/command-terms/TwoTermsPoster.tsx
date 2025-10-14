import React from 'react';
import { CommandTerm } from '../../../data/commandTerms';
import CommandTermPoster from './CommandTermPoster';

interface TwoTermsPosterProps {
    termPair: (CommandTerm | null)[]; // Array can have one or two terms
}

const TwoTermsPoster: React.FC<TwoTermsPosterProps> = ({ termPair }) => {
    return (
        <div
            className="printable-poster flex flex-col bg-gray-100 w-[42cm] min-h-[29.7cm] shadow-lg mb-8 page-break-after:always print:shadow-none print:mb-0 print:bg-white">
            {/* First Term */}
            {termPair[0] && (
                <div className="flex-1 flex flex-col">
                    <CommandTermPoster termData={termPair[0]}/>
                </div>
            )}

            {/* Divider */}
            {termPair[1] && <div className="border-t-2 border-dashed border-gray-300 mx-8"></div>}

            {/* Second Term */}
            {termPair[1] && (
                <div className="flex-1 flex flex-col">
                    <CommandTermPoster termData={termPair[1]}/>
                </div>
            )}

            <footer className="mt-auto pt-4 text-center text-xs text-gray-500 mb-4">
                The Island School | Computer Science & Design Department
            </footer>
            <div className="page-break"></div>
        </div>
    );
};

export default TwoTermsPoster;