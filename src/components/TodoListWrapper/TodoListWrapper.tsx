import { useContext } from "react"
import { CrossIcon } from "../../assets/Icons"
import { DefaultConteiner } from "../styles/DefaultConteiner.styled"
import { TodoListConteiner } from "./TodoListWrapper.styled"
import { DataContext } from "../../context/DataContext"
import { TodoListComponent } from "../TodoListComponent/TodoListComponent"


export const TodoListWrapper = () => {
    const {
        tasks
    } = useContext(DataContext)

    return (
        <DefaultConteiner>
            <TodoListConteiner>
                <header>
                    <label>ToDo List</label>
                    <button>
                        <CrossIcon />
                    </button>
                </header>
                {tasks.map(task => (
                    <TodoListComponent key={task.content} task={task} />
                ))}
            </TodoListConteiner>
        </DefaultConteiner>
    )
}