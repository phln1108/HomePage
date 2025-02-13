import { useContext, useRef, useState } from "react"
import { DefaultModal } from "../DefaultModal/DefaultModal"
import { InputLoginHandler, LoginInput } from "../LoginInput/LoginInput"
import { Modal } from "./TaskModel.styled"
import { DataContext } from "../../context/DataContext"
import { TaskState } from "../../Utils/DataStructure"

interface TaskModalProps {
    onClose: () => void
}

export const TaskModal = ({ onClose }: TaskModalProps) => {
    const {
        addTask
    } = useContext(DataContext)

    const [label, setLabel] = useState<string>("")

    const labelref = useRef<InputLoginHandler | null>(null)

    const onSaveTask = (): boolean => {
        if (!label) {
            labelref.current?.focus()
            console.warn("Preencha tudo!")
            return false
        }

        addTask({
            id: new Date().getTime(),
            content: label,
            state: TaskState.ToDo,
        })
        return true

    }

    return (
        <DefaultModal
            onClose={onClose}
            title="New Task"
            saveButton
            onSave={onSaveTask}
        >
            <Modal>
                <LoginInput
                    value={label}
                    placeholder="Label"
                    onChange={e => setLabel(e.target.value)}
                    required
                    ref={labelref}
                    onEnter={() => onSaveTask() && onClose()}
                    autoFocus
                />
            </Modal>
        </DefaultModal>
    )
} 