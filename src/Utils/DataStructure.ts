export interface SearchEngine {
    name: string;
    icon: string;
}

export interface QuickLink {
    id: number; // creation time
    name: string;
    link: string;
}

export enum TaskState { 
    ToDo,
    Doing,
    Done,
    None
}

export interface ToDoTask {
    id: number; // creation time
    content: string;
    state: TaskState; 
}

export interface DataStructure {
    SelectedSearchEngine: number;
    QuickLinks: QuickLink[]
    Tasks: ToDoTask[] 
}

//  https://logo.clearbit.com/ has some way to get logo wth transparent background