export interface SearchEngine {
    name: string;
    icon: string;
}

export interface QuickLink {
    name: string;
    link: string;
}

export interface ToDoTask {
    content: string;
    done: boolean; 
}

export interface DataStructure {
    SelectedSearchEngine: number;

    QuickLinks: QuickLink[]
}

//  https://logo.clearbit.com/ has some way to get logo wth transparent background