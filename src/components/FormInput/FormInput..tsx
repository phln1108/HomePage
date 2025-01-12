import { useRef } from "react";
import { FormInputStyle } from "./FormInput.styled";


interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    changevalue: (newValue: string) => void;
}

export const FormInput = ({label,changevalue,...props}: inputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    function handleKeyDown(event: React.KeyboardEvent) {
        if (event.key == "Escape") {
            inputRef.current?.blur();
        }
    }

    return (
        <FormInputStyle>
            <label>{label}</label>
            <input
                {...props}
                id="newGroupName"
                required
                ref={inputRef}
                onKeyDown={handleKeyDown}
                value={props.value}
                onChange={(e) => changevalue(e.target.value)}
                type={props.type}
                onClick={ e => e.stopPropagation()}
            />
        </FormInputStyle>
    )
}