import { ToDoTask } from "../../Utils/DataStructure.ts";
import { TodoListComponentStyle, Spacer } from "./TodoListComponent.styled.tsx";
import { CheckBoxEmpty, CheckBoxSelected } from "../../assets/Icons.tsx";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext.tsx";



interface TodoListComponentProps {
    task: ToDoTask;
}

const TIME_UNITS: [string, number][] = [
    ["yr", 31536000],
    ["mth", 2592000],
    ["d", 86400],
    ["hr", 3600],
    ["min", 60],
];

export const TodoListComponent = ({ task }: TodoListComponentProps) => {
    const {
        editTask
    } = useContext(DataContext)
    
    let now = Date.now();
    let time = Math.floor((now - task.id) / 1000); // time in seconds

    const unit = TIME_UNITS.find(([_, seconds]) => time >= seconds) || ["sec", 1];

    const [timeLabel, divisor] = unit;
    time = Math.floor(time / divisor);

    const toggleDone = () => {
        editTask({
            ...task,
            done: !task.done
        })
    }

    return (
        <TodoListComponentStyle $done={task.done}>
            <div className="time">
                <label>
                    {time}
                </label>
                <span>
                    {timeLabel}
                    {time > 1 ? "s" : ""}
                </span>
            </div>
            
            <Spacer/>
            
            <label>
                {task.content}
            </label>

            <Spacer/>
            
            <button onClick={toggleDone}>
                {task.done ?
                    <CheckBoxSelected />
                    :
                    <CheckBoxEmpty />
                }
            </button>
        </TodoListComponentStyle>
    );
};
