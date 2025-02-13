import { TaskState, ToDoTask } from "../../Utils/DataStructure.ts";
import { TodoListComponentStyle, Spacer } from "./TodoListComponent.styled.tsx";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext.tsx";
import { Select } from "../Select/Select.tsx";



interface TodoListComponentProps {
    task: ToDoTask;
}

const TIME_UNITS: [string, number][] = [
    ["year", 31536000],
    ["mnth", 2592000],
    ["day", 86400],
    ["hour", 3600],
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

    const changeTaskState = (newState: number) => {
        editTask({
            ...task,
            state: newState
        })
    }

    return (
        <TodoListComponentStyle $done={task.state == TaskState.Done}>
            <div className="time">
                <label>
                    {(time< 10 ? "0" : "") + time}
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
            
            <Select
                options={[
                    {
                        value: TaskState.ToDo,
                        label: "To Do"
                    },
                    {
                        value: TaskState.Doing,
                        label: "Doing"
                    },
                    {
                        value: TaskState.Done,
                        label: "Done"
                    },
                ]}
                onChange={changeTaskState}
                defaultChoice={task.state}
            />
        </TodoListComponentStyle>
    );
};
