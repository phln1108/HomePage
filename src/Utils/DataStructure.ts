export interface SearchEngine {
    name: string;
    icon: string;
}

export interface QuickLink {
    id: number; // creation time
    name: string;
    link: string;
}

export interface ToDoTask {
    id: number; // creation time
    content: string;
    done: boolean; 
}

export interface DataStructure {
    SelectedSearchEngine: number;
    QuickLinks: QuickLink[]
    Tasks: ToDoTask[] 
}

//  https://logo.clearbit.com/ has some way to get logo wth transparent background