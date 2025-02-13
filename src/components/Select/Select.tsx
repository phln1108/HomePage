import { useRef, useState } from "react";
import { DropDownIcon } from "../../assets/Icons";
import { SelectStyled } from "./Select.styled";

interface SelectOption {
    value: number;
    label: string;
}

interface SelectProps {
    options: SelectOption[];
    onChange: (value: number) => void;
    disabled?: boolean;
    defaultChoice?: number;
}

export const Select = ({ options, disabled, defaultChoice, onChange }: SelectProps) => {
    const ref = useRef<HTMLButtonElement>(null)

    const index: number = options.findIndex(option => option.value === defaultChoice);
    const defaultIndex: number = index === -1 ? 0 : index;

    const choice = options[defaultIndex];

    const [focused,setFocused] = useState<number>(0)

    const handleClick = () => {
        if (focused + 1 > 2) {
            ref.current?.blur()
        }else {
            setFocused(focused + 1)
        }
    }

    return (
        <SelectStyled >
            <button
                ref={ref}
                disabled={disabled}
                onFocus={() => setFocused(1)}
                onBlur={() => setFocused(0)}
                onClick={handleClick}
            >
                <label>{choice.label}</label>
                <DropDownIcon />
            </button>
            <ul>
                {options.map((option, i) => (
                    <button
                        key={option.label}
                        onClick={e => { e.preventDefault(); onChange(options[i].value) }}
                    >
                        <label>{option.label}</label>
                    </button>
                ))}
            </ul>
        </SelectStyled>
    )
}