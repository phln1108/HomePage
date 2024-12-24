export interface SearchEngine {
    name: string,
    icon: string,
}

export interface QuickLink {
    name: string,
    link: string,
}

export interface DataStructure {
    SelectedSearchEngine: number;

    QuickLinks: QuickLink[]
}