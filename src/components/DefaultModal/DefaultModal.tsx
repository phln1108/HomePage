import { CloseWithoutCircleIcon } from "../../assets/Icons.tsx";
import { DefaultModalstyle } from "./DefaultModal.styled.tsx";



interface DefaultModalProps {
    children: any;
    onClose: () => void;
    title: string
}

export const DefaultModal = ({children,onClose,title}: DefaultModalProps) => {

    return(
        <DefaultModalstyle>
            <div className="modalHeader">
                <label>{title}</label>
                <button onClick={onClose}>
                    <CloseWithoutCircleIcon/>
                </button>
            </div>
            {children}
        </DefaultModalstyle>
    )
}