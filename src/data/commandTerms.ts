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
    // --- Group 1: Recalling and Naming Information (Простое воспроизведение) ---
    // Эти термины требуют назвать или определить что-то без объяснений.
    {
        term: "State",
        formal: "Give a specific name, value or other brief answer without explanation or calculation.",
        student: "Give a short, specific answer. No details or calculation needed."
    },
    {
        term: "List",
        formal: "Give a sequence of brief answers with no explanation.",
        student: "Write down short answers one after another. No explanation is needed."
    },
    {
        term: "Identify",
        formal: "Provide an answer from a number of possibilities.",
        student: "Pick out and name the correct item or piece of information."
    },
    {
        term: "Label",
        formal: "Add labels to a diagram.",
        student: "Add names to the different parts of a diagram."
    },
    {
        term: "Define",
        formal: "Give the precise meaning of a word, phrase, concept or physical quantity.",
        student: "Give the clear, exact meaning of a word or concept."
    },

    // --- Group 2: Describing and Outlining (Описание и изложение) ---
    // Эти термины требуют дать структурированный обзор или подробный рассказ.
    {
        term: "Outline",
        formal: "Give a brief account or summary.",
        student: "Give a short summary of the main points or steps."
    },
    {
        term: "Describe",
        formal: "Give a detailed account.",
        student: "Give a detailed account of what something is or how it works."
    },
    {
        term: "Trace",
        formal: "Follow and record the actions of an algorithm.",
        student: "Show the step-by-step execution of a process or algorithm."
    },

    // --- Group 3: Applying and Creating (Применение и создание) ---
    // Эти термины требуют выполнить конкретное действие: посчитать, построить или нарисовать.
    {
        term: "Calculate",
        formal: "Obtain a numerical answer showing the relevant stages in the working.",
        student: "Find a number answer. You must show the steps you took."
    },
    {
        term: "Estimate",
        formal: "Obtain an approximate value.",
        student: "Give a reasonable guess for a value, not an exact one."
    },
    {
        term: "Construct",
        formal: "Display information in a diagrammatic or logical form.",
        student: "Create a diagram, table, or logical structure (like pseudocode)."
    },
    {
        term: "Sketch",
        formal: "Represent by means of a diagram or graph (labelled as appropriate). The sketch should give a general idea of the required shape or relationship, and should include relevant features.",
        student: "Draw a simple diagram or graph. It should show the main shape and important parts."
    },

    // --- Group 4: Analyzing and Explaining (Анализ и объяснение) ---
    // Эти термины требуют показать понимание связей, причин и различий.
    {
        term: "Distinguish",
        formal: "Make clear the differences between two or more concepts or items.",
        student: "Explain only what is different between two or more things."
    },
    {
        term: "Compare",
        formal: "Give an account of the similarities between two (or more) items or situations, referring to both (all) of them throughout.",
        student: "Explain what is the same AND what is different between two things."
    },
    {
        term: "Deduce",
        formal: "Reach a conclusion from the information given.",
        student: "Use the given information to figure out the logical answer."
    },
    {
        term: "Explain",
        formal: "Give a detailed account including reasons or causes.",
        student: "Give details about how or why something happens. Include reasons."
    },

    // --- Group 5: Evaluating and Justifying (Оценка и обоснование) ---
    // Эти термины требуют высказать и защитить суждение, взвесив все "за" и "против".
    {
        term: "Justify",
        formal: "Give valid reasons or evidence to support an answer or conclusion.",
        student: "Give strong reasons and evidence to prove your answer is correct."
    },
    {
        term: "Suggest",
        formal: "Propose a solution, hypothesis or other possible answer.",
        student: "Propose a possible solution, idea, or reason."
    },
    {
        term: "Discuss",
        formal: "Offer a considered and balanced review that includes a range of arguments, factors or hypotheses. Opinions or conclusions should be presented clearly and supported by appropriate evidence.",
        student: "Examine different sides of a topic. Give arguments for and against, and then form a conclusion."
    },
    {
        term: "Evaluate",
        formal: "Make an appraisal by weighing up the strengths and limitations.",
        student: "Judge the value of something by looking at its good points (strengths) and bad points (limitations)."
    },
    {
        term: "To what extent",
        formal: "Consider the merits or otherwise of an argument or concept. Opinions and conclusions should be presented clearly and supported with appropriate evidence and sound argument.",
        student: "Judge how true or important something is. Discuss both sides and then give your final opinion with evidence."
    }
];
export const commandTermsData: CommandTerm[] = terms.map((t, index) => ({
    term: t.term,
    formalDefinition: t.formal,
    studentDefinition: t.student,
    colorScheme: colorSchemes[index % colorSchemes.length],
}));