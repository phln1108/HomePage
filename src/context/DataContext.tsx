import { createContext, useState } from "react";


interface DataContextProps {
    searchEngine: number;
    setSearchEngine: (value: number) => void;
}


export const DataContext = createContext({} as DataContextProps)

interface DataProviderProps {
    children: any
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [searchEngine, setSearchEngine] = useState<number>(0)
    
    const values: DataContextProps = {
        searchEngine,
        setSearchEngine,
    }

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}


