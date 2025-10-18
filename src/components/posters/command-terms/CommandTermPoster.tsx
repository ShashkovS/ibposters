import React from 'react';
import { CommandTerm } from '../../../data/commandTerms';

interface CommandTermPosterProps {
    termData: CommandTerm;
}

const InfoIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
    </svg>
);

const StudentIcon: React.FC<{className: string}> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.7 1.078a.75.75 0 01.6 0l9.333 4.222a.75.75 0 010 1.354l-9.333 4.222a.75.75 0 01-.6 0L2.367 6.654a.75.75 0 010-1.354L11.7 1.078zM2.25 7.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-18A.75.75 0 002.25 6v1.5z" />
        <path d="M3.75 9.75A.75.75 0 003 10.5v8.25a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H3.75zM8.25 11.25a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zM12.75 11.25a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zM17.25 11.25a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75z" />
    </svg>
);


const CommandTermPoster: React.FC<CommandTermPosterProps> = ({ termData }) => {
    const { term, formalDefinition, studentDefinition, colorScheme } = termData;

    return (
        <div className="flex flex-col flex-grow p-8 print:p-4 min-h-[40vh]">
            {/* Header Section */}
            <div className={`p-4 rounded-t-lg text-white ${colorScheme.primary}`}>
                <h1 className="text-7xl font-extrabold font-roboto-slab">{term}</h1>
            </div>

            {/* Body Section */}
            <div className="flex-grow grid grid-cols-2 gap-6 pt-6">
                {/* Formal Definition */}
                <div >
                    <div className="flex items-center mb-3">
                        <InfoIcon className={`w-8 h-8 mr-3 flex-shrink-0 ${colorScheme.text}`} />
                        <h2 className={`text-5xl font-bold font-roboto-slab ${colorScheme.text}`}>Formal Definition</h2>
                    </div>
                    <p className="text-4xl text-gray-700 leading-relaxed font-sans">{formalDefinition}</p>
                </div>

                {/* Student Definition */}
                <div >
                    <div className="flex items-center mb-3">
                        <StudentIcon className={`w-8 h-8 mr-3 flex-shrink-0 ${colorScheme.text}`} />
                        <h2 className={`text-5xl font-bold font-roboto-slab ${colorScheme.text}`}>In Simple Terms...</h2>
                    </div>
                    <p className="text-4xl text-gray-700 leading-relaxed font-sans">{studentDefinition}</p>
                </div>
            </div>

        </div>
    );
};

export default CommandTermPoster;