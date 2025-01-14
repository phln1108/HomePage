import { CloseWithoutCircleIcon } from "../../assets/Icons.tsx";
import { DefaultModalstyle } from "./DefaultModal.styled.tsx";



interface DefaultModalProps {
    children: any;
    onClose: () => void;
    title: string;
    saveButton?: boolean;
    onSave?: () => boolean;
}

export const DefaultModal = ({ children, onClose, title, saveButton, onSave }: DefaultModalProps) => {

    return (
        <DefaultModalstyle>
            <div className="modalHeader">
                <label>{title}</label>
                <button onClick={onClose}>
                    <CloseWithoutCircleIcon />
                </button>
            </div>
            {children}
            {saveButton &&
                <div className="modalButtons">
                    <button className="cancel" onClick={onClose}>Cancel</button>
                    <button onClick={() => onSave?.() && onClose()}>Save</button>
                </div>
            }
        </DefaultModalstyle>
    )
}