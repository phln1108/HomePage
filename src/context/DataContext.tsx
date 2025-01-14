import { createContext, useEffect, useState } from "react";
import { DataStructure, QuickLink } from "../Utils/DataStructure";


interface DataContextProps {
    searchEngine: number;
    setSearchEngine: (value: number) => void;
    quickLinks: QuickLink[]
    addQuickLink: (quickLink: QuickLink) => void;
    removeQuickLink: (quickLink: QuickLink) => void;
}


export const DataContext = createContext({} as DataContextProps)

interface DataProviderProps {
    children: any
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [searchEngine, setSearchEngine] = useState<number>(0)
    const [quickLinks, setQuickLinks] = useState<QuickLink[]>([])
    const [ refreshed, setRefreshed] = useState<boolean>(false)


    useEffect(() => {//get the data out of the local storage
        const dataStr = localStorage.getItem("data")
        
        if(!dataStr)
            return

        const data: DataStructure = JSON.parse(dataStr)

        setSearchEngine(data.SelectedSearchEngine)
        setQuickLinks(data.QuickLinks)

        setRefreshed(true)
    },[])
    
    useEffect(() => {// save the data on the local storage
        if (!refreshed)
            return

        const data: DataStructure = {
            SelectedSearchEngine: searchEngine,
            QuickLinks: quickLinks,
        } 

        localStorage.setItem("data",JSON.stringify(data))
    },[searchEngine,quickLinks])

    const addQuickLink = (quickLink: QuickLink) => {
        setQuickLinks([...quickLinks,quickLink]);
    }

    const removeQuickLink = (quickLink: QuickLink) => {
        setQuickLinks((old) => old.filter((q => q.link !== quickLink.link)));
    }

    const values: DataContextProps = {
        searchEngine,
        setSearchEngine,
        quickLinks,
        addQuickLink,
        removeQuickLink
    }
    
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}


