export interface Tip {
    name: string;
    shortcut: string;
    description: string;
}

export interface TechTipData {
    title: string;
    subtitle: string;
    colorScheme: {
        headerBg: string;
        headerText: string;
        accentText: string;
        shortcutBg: string;
        shortcutText: string;
    };
    tips: Tip[];
}

export const techTipsData: TechTipData[] = [
    // Poster 1: macOS Essentials
    {
        title: "macOS Essentials",
        subtitle: "Key shortcuts for everyday productivity",
        colorScheme: {
            headerBg: "bg-gray-800",
            headerText: "text-white",
            accentText: "text-blue-600",
            shortcutBg: "bg-gray-200",
            shortcutText: "text-gray-900",
        },
        tips: [
            { name: "Spotlight Search", shortcut: "⌘ + Space", description: "Instantly find files, apps, and information." },
            { name: "Find", shortcut: "⌘ + F", description: "Search for text within the current app or document." },
            { name: "Switch Apps", shortcut: "⌘ + Tab", description: "Quickly cycle through all open applications." },
            { name: "Switch Windows", shortcut: "⌘ + `", description: "Switch between windows of the *same* application." },
            { name: "Screenshot Area", shortcut: "⇧ + ⌘ + 4", description: "Capture a specific portion of your screen." },
            { name: "Full Screenshot", shortcut: "⇧ + ⌘ + 3", description: "Capture an image of your entire screen." },
            { name: "Quick Look", shortcut: "Spacebar", description: "Select any file and press Space to preview it." },
            { name: "Go to Folder", shortcut: "⇧ + ⌘ + G", description: "In Finder, jump directly to any folder path." },
            { name: "Copy File Path", shortcut: "⌥ + ⌘ + C", description: "Copy the absolute path of a selected file." },
            { name: "Preferences", shortcut: "⌘ + ,", description: "Open the settings for the current application." },
            { name: "Close Window", shortcut: "⌘ + W", description: "Close the active window (but not the whole app)." },
            { name: "Hide App", shortcut: "⌘ + H", description: "Hide all windows of the current application." },
            { name: "Quit App", shortcut: "⌘ + Q", description: "Close the currently active application." },
            { name: "Force Quit", shortcut: "⌥ + ⌘ + Esc", description: "Close applications that are not responding." },
            { name: "Lock Screen", shortcut: "⌃ + ⌘ + Q", description: "Instantly lock your Mac for security." },
            { name: "Move to Trash", shortcut: "⌘ + Delete", description: "Send selected files in Finder to the Trash." },
        ],
    },
    // Poster 2: Terminal Commands
    {
        title: "Essential Terminal Commands",
        subtitle: "Navigate your Mac with the command line",
        colorScheme: {
            headerBg: "bg-green-700",
            headerText: "text-white",
            accentText: "text-green-800",
            shortcutBg: "bg-green-100",
            shortcutText: "text-green-900",
        },
        tips: [
            { name: "Current Path", shortcut: "pwd", description: "Print the full path of your current location." },
            { name: "List Contents", shortcut: "ls", description: "See files and folders in the current directory." },
            { name: "List More Info", shortcut: "ls -la", description: "List all items (including hidden) with details." },
            { name: "Change Directory", shortcut: "cd <folder>", description: "Move into a different folder. Use 'cd ..' to go up." },
            { name: "Make Directory", shortcut: "mkdir <name>", description: "Create a new folder with the specified name." },
            { name: "View File Content", shortcut: "cat <file>", description: "Display the entire content of a text file." },
            { name: "Copy", shortcut: "cp <src> <dest>", description: "Copy a file or folder to a new location." },
            { name: "Move / Rename", shortcut: "mv <src> <dest>", description: "Move a file to a new location or rename it." },
            { name: "Remove File", shortcut: "rm <file>", description: "Permanently delete a file. Use with caution!" },
            { name: "Remove Folder", shortcut: "rm -r <folder>", description: "Permanently delete a folder and everything inside it." },
            { name: "Open Item", shortcut: "open <item>", description: "Open a file, folder, or URL. 'open .' opens Finder." },
            { name: "Show Manual", shortcut: "man <command>", description: "Display the help manual for any command." },
            { name: "Clear Screen", shortcut: "clear", description: "Clear all text from the terminal screen." },
            { name: "Home Directory", shortcut: "cd ~", description: "Jump directly to your user's home folder." },
            { name: "Echo Text", shortcut: "echo 'Hello'", description: "Print text or variable values to the terminal." },
            { name: "Create Empty File", shortcut: "touch <file>", description: "Create a new, empty file with the given name." },
        ],
    },
    // Poster 3: Terminal Productivity
    {
        title: "Terminal Productivity Tips",
        subtitle: "Work faster in the command line",
        colorScheme: {
            headerBg: "bg-indigo-700",
            headerText: "text-white",
            accentText: "text-indigo-800",
            shortcutBg: "bg-indigo-100",
            shortcutText: "text-indigo-900",
        },
        tips: [
            { name: "Auto-Complete", shortcut: "Tab", description: "Press Tab to automatically complete file or command names." },
            { name: "Command History", shortcut: "↑ / ↓", description: "Use the Up and Down arrows to cycle through past commands." },
            { name: "Search History", shortcut: "Ctrl + R", description: "Interactively search for a command you used before." },
            { name: "Cancel Command", shortcut: "Ctrl + C", description: "Immediately stop the currently running process." },
            { name: "Clear Screen", shortcut: "Ctrl + L", description: "Clear the terminal window for a fresh start." },
            { name: "Exit Shell", shortcut: "Ctrl + D", description: "Log out or close the current terminal session." },
            { name: "Go to Start of Line", shortcut: "Ctrl + A", description: "Jump your cursor to the beginning of the command." },
            { name: "Go to End of Line", shortcut: "Ctrl + E", description: "Jump your cursor to the end of the command." },
            { name: "Previous Directory", shortcut: "cd -", description: "Quickly jump back to the last directory you were in." },
            { name: "Drag & Drop Path", shortcut: "Drag Item", description: "Drag a file from Finder into the terminal to paste its full path." },
            { name: "Copy & Paste", shortcut: "⌘ + C / ⌘ + V", description: "Use standard copy/paste for text in the terminal." },
            { name: "Split Panes (iTerm2)", shortcut: "⌘ + D / ⇧ + ⌘ + D", description: "Split your terminal window vertically or horizontally." },
            { name: "New Tab", shortcut: "⌘ + T", description: "Open a new terminal tab in the same window." },
            { name: "Switch Tabs", shortcut: "⌘ + { / }", description: "Cycle between your open terminal tabs." },
        ],
    },
    // Poster 4: PyCharm Essentials
    {
        title: "PyCharm Essentials",
        subtitle: "Essential shortcuts for efficient Python development",
        colorScheme: {
            headerBg: "bg-slate-700",
            headerText: "text-white",
            accentText: "text-cyan-600",
            shortcutBg: "bg-slate-200",
            shortcutText: "text-slate-900",
        },
        tips: [
            { name: "Search Everywhere", shortcut: "Double ⇧", description: "Find any file, class, symbol, or action in your project." },
            { name: "Find in File", shortcut: "⌘ + F", description: "Search for text within the current file." },
            { name: "Find in Files", shortcut: "⇧ + ⌘ + F", description: "Search for text across the entire project." },
            { name: "Run Code", shortcut: "⌃ + R", description: "Execute the current Python script or configuration." },
            { name: "Go to Definition", shortcut: "⌘ + B", description: "Jump to the source code where a function or variable is defined." },
            { name: "Quick Definition", shortcut: "⌥ + Space", description: "See the definition of a function or class in a popup window." },
            { name: "Find Usages", shortcut: "⌥ + F7", description: "Show all the places where a specific piece of code is used." },
            { name: "Refactor / Rename", shortcut: "⇧ + F6", description: "Safely rename a variable or function everywhere it's used." },
            { name: "Quick Fix", shortcut: "⌥ + Enter", description: "Show suggestions and automatic fixes for errors or warnings." },
            { name: "Comment Line", shortcut: "⌘ + /", description: "Add or remove a comment from the current line or selection." },
            { name: "Duplicate Line", shortcut: "⌘ + D", description: "Create an exact copy of the current line or selection." },
            { name: "Reformat Code", shortcut: "⌥ + ⌘ + L", description: "Automatically clean up your code's formatting and style." },
            { name: "Recent Files", shortcut: "⌘ + E", description: "Quickly open a list of files you've recently worked on." },
            { name: "Open Terminal", shortcut: "⌥ + F12", description: "Open the built-in terminal window without leaving PyCharm." },
        ],
    },
    // Poster 5: Git & GitHub Basics
    {
        title: "Git & GitHub Basics",
        subtitle: "Core commands for version control and collaboration",
        colorScheme: {
            headerBg: "bg-gray-900",
            headerText: "text-white",
            accentText: "text-orange-600",
            shortcutBg: "bg-gray-200",
            shortcutText: "text-gray-900",
        },
        tips: [
            { name: "Initialize Repo", shortcut: "git init", description: "Start a new Git repository in your current project folder." },
            { name: "Clone Repo", shortcut: "git clone <url>", description: "Download a copy of a remote repository from GitHub." },
            { name: "Check Status", shortcut: "git status", description: "See which files have been changed, added, or are untracked." },
            { name: "Stage Changes", shortcut: "git add <file>", description: "Add file changes to the staging area for the next commit." },
            { name: "Commit Changes", shortcut: "git commit -m 'msg'", description: "Save your staged changes to the project's history." },
            { name: "Push to Remote", shortcut: "git push", description: "Upload your committed changes to a remote server like GitHub." },
            { name: "Pull from Remote", shortcut: "git pull", description: "Download and merge the latest changes from the remote." },
            { name: "View History", shortcut: "git log", description: "See a list of all the commits made in the repository." },
            { name: "Create Branch", shortcut: "git branch <name>", description: "Create a new branch to work on a feature in isolation." },
            { name: "Switch Branch", shortcut: "git checkout <name>", description: "Switch your current working context to a different branch." },
        ],
    },
];