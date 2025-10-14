export interface CommandTerm {
    term: string;
    formalDefinition: string;
    studentDefinition: string;
    colorScheme: {
        primary: string;
        secondary: string;
        text: string;
    };
}

const colorSchemes = [
    { primary: 'bg-blue-600', secondary: 'bg-blue-100', text: 'text-blue-800' },
    { primary: 'bg-green-600', secondary: 'bg-green-100', text: 'text-green-800' },
    { primary: 'bg-purple-600', secondary: 'bg-purple-100', text: 'text-purple-800' },
    { primary: 'bg-red-600', secondary: 'bg-red-100', text: 'text-red-800' },
    { primary: 'bg-yellow-500', secondary: 'bg-yellow-100', text: 'text-yellow-800' },
    { primary: 'bg-indigo-600', secondary: 'bg-indigo-100', text: 'text-indigo-800' },
];

const terms = [
    { term: "Calculate", formal: "Obtain a numerical answer showing the relevant stages in the working.", student: "Show your work step-by-step to find a final number." },
    { term: "Compare", formal: "Give an account of the similarities between two (or more) items or situations, referring to both (all) of them throughout.", student: "Explain what is the same and what is different. Talk about both things all the time." },
    { term: "Construct", formal: "Display information in a diagrammatic or logical form.", student: "Make a diagram, a flowchart, or a logical chart to show the information." },
    { term: "Deduce", formal: "Reach a conclusion from the information given.", student: "Use the information you are given to figure out the answer." },
    { term: "Define", formal: "Give the precise meaning of a word, phrase, concept or physical quantity.", student: "Give the clear, exact meaning of a word." },
    { term: "Describe", formal: "Give a detailed account.", student: "Give a lot of details about what something is like. Paint a picture with words." },
    { term: "Discuss", formal: "Offer a considered and balanced review that includes a range of arguments, factors or hypotheses. Opinions or conclusions should be presented clearly and supported by appropriate evidence.", student: "Look at different sides of an issue. Give arguments for and against. Use evidence to support your final opinion." },
    { term: "Distinguish", formal: "Make clear the differences between two or more concepts or items.", student: "Explain only the differences between two things." },
    { term: "Estimate", formal: "Obtain an approximate value.", student: "Make a good guess for the value or number, not the exact one." },
    { term: "Evaluate", formal: "Make an appraisal by weighing up the strengths and limitations.", student: "Look at the good points and the bad points, then make a final judgment on its value or success." },
    { term: "Explain", formal: "Give a detailed account including reasons or causes.", student: "Give details about how or why something happens." },
    { term: "Identify", formal: "Provide an answer from a number of possibilities.", student: "Choose the correct answer from a list of options or find a specific piece of information." },
    { term: "Justify", formal: "Give valid reasons or evidence to support an answer or conclusion.", student: "Give strong reasons and evidence to prove that your answer or choice is correct." },
    { term: "Label", formal: "Add labels to a diagram.", student: "Add names to the different parts of a picture or diagram." },
    { term: "List", formal: "Give a sequence of brief answers with no explanation.", student: "Write down short answers one after another. No explanation is needed." },
    { term: "Outline", formal: "Give a brief account or summary.", student: "Give a short summary of the main points." },
    { term: "Sketch", formal: "Represent by means of a diagram or graph (labelled as appropriate). The sketch should give a general idea of the required shape or relationship, and should include relevant features.", student: "Draw a simple diagram or graph. It should show the main shape and important parts. Remember to add labels." },
    { term: "State", formal: "Give a specific name, value or other brief answer without explanation or calculation.", student: "Give a short, simple answer. No details or calculations are needed." },
    { term: "Suggest", formal: "Propose a solution, hypothesis or other possible answer.", student: "Give a possible answer, idea, or solution." },
    { term: "To what extent", formal: "Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.", student: "How much do you agree? Look at the pros and cons of an idea, use evidence, and then decide how true or important it is." },
    { term: "Trace", formal: "Follow and record the actions of an algorithm.", student: "Write down the step-by-step actions of an algorithm as it runs, showing what happens to the data." }
];

export const commandTermsData: CommandTerm[] = terms.map((t, index) => ({
    term: t.term,
    formalDefinition: t.formal,
    studentDefinition: t.student,
    colorScheme: colorSchemes[index % colorSchemes.length],
}));