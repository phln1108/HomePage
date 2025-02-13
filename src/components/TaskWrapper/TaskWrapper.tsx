import { useContext } from "react"
import { CrossIcon } from "../../assets/Icons.tsx"
import { DefaultConteiner } from "../styles/DefaultConteiner.styled.tsx"
import { TodoListConteiner } from "./TaskWrapper.styled.tsx"
import { DataContext } from "../../context/DataContext.tsx"
import { TaskComponent } from "../TaskComponent/TaskComponent.tsx"
import { ModalContext } from "../../context/ModalContext.tsx"


export const TodoListWrapper = () => {
    const {
        tasks
    } = useContext(DataContext)

    const {
        openTaskModal
    } = useContext(ModalContext)

    return (
        <DefaultConteiner>
            <TodoListConteiner>
                <header>
                    <label>ToDo List</label>
                    <button onClick={() => console.log("aaaa")}>
                        <CrossIcon  onClick={() => openTaskModal()}/>
                    </button>
                </header>
                {tasks.map(task => (
                    <TaskComponent key={task.content} task={task} />
                ))}
            </TodoListConteiner>
        </DefaultConteiner>
    )
}