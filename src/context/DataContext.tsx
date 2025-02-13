import { createContext, useEffect, useState } from "react";
import { DataStructure, QuickLink, TaskState, ToDoTask } from "../Utils/DataStructure";


interface DataContextProps {
    searchEngine: number;
    setSearchEngine: (value: number) => void;
    quickLinks: QuickLink[]
    addQuickLink: (quickLink: QuickLink) => void;
    removeQuickLink: (quickLink: QuickLink) => void;
    editQuickLink: (quickLink: QuickLink) => void;
    tasks: ToDoTask[];
    addTask: (task: ToDoTask) => void;
    removeTask: (task: ToDoTask) => void;
    editTask: (task: ToDoTask) => void;
}


export const DataContext = createContext({} as DataContextProps)

interface DataProviderProps {
    children: any
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [searchEngine, setSearchEngine] = useState<number>(0)
    const [quickLinks, setQuickLinks] = useState<QuickLink[]>([])
    const [tasks, setTasks] = useState<ToDoTask[]>([])
    const [refreshed, setRefreshed] = useState<boolean>(false)

    useEffect(() => {//get the data out of the local storage
        const dataStr = localStorage.getItem("data")

        if (!dataStr) {
            setRefreshed(true);
            return;
        }

        const data: DataStructure = JSON.parse(dataStr)

        setSearchEngine(data.SelectedSearchEngine || 0)
        setQuickLinks(data.QuickLinks || [])
        setTasks(data.Tasks || [])
        // let now = new Date()
        // setTasks([
        //     {
        //         id: now.getTime() + 1,
        //         content: "esse aqui é um teste",
        //         state: TaskState.Doing
        //     },
        //     {
        //         id: now.getTime() + 2,
        //         content: "terminar esse negocio logo",
        //         state: TaskState.Doing
        //     },
        //     {
        //         id: now.getTime() + 3,
        //         content: "vai da certo isso",
        //         state: TaskState.Doing
        //     },
        //     {
        //         id: now.getTime() + 4,
        //         content: "Nossa, wtf, que desgrça foi isso",
        //         state: TaskState.Doing
        //     },  
        // ])
        setRefreshed(true)
    }, [])

    useEffect(() => {// save the data on the local storage
        if (!refreshed)
            return

        const data: DataStructure = {
            SelectedSearchEngine: searchEngine,
            QuickLinks: quickLinks,
            Tasks: tasks
        }

        localStorage.setItem("data", JSON.stringify(data))
        console.log(data)
    }, [searchEngine, quickLinks, tasks])

    const addQuickLink = (quickLink: QuickLink) => {
        setQuickLinks([...quickLinks, quickLink]);
    }

    const removeQuickLink = (quickLink: QuickLink) => {
        setQuickLinks((old) => old.filter((q => q.id !== quickLink.id)));
    }

    const editQuickLink = (quickLink: QuickLink, ) => {
        setQuickLinks((old) => {
            let index = old.findIndex((q => q.id === quickLink.id))
            return [...old.slice(0,index),quickLink,...old.slice(index+1)]
        }
    )}

    const addTask = (task: ToDoTask) => {
        setTasks([...tasks, task]);
    }

    const removeTask = (task: ToDoTask) => {
        setTasks((old) => old.filter((q => q.content !== task.content)));
    }

    const editTask = (task: ToDoTask) => {
        let n = [...tasks]
        let index = tasks.findIndex((q => q.id === task.id)) 
        n[index] = task
        setTasks(n)
    }

    const values: DataContextProps = {
        searchEngine,
        setSearchEngine,
        quickLinks,
        addQuickLink,
        removeQuickLink,
        editQuickLink,
        tasks,
        addTask,
        removeTask,
        editTask
    }

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}


