import styles from "./Select.module.css"
import { useState } from "react";
import { SelectArrow } from "../../assets/Icons";

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
    const index: number = options.findIndex(option => option.value === defaultChoice);
    const defaultIndex: number = index === -1 ? 0 : index;

    const choice = options[defaultIndex];

    const [active, setActive] = useState<boolean>(false);

    function handleChoice(newChoice: SelectOption) {
        onChange(newChoice.value)
        setActive(!active)
    }

    return (
        <div
            onClick={() => disabled || setActive(!active)}
            className={`${styles.body} ${disabled ? styles.center : ""}`}
        >
            {options.map(option => (// gambiarra pra fixar a largura baseado na maior string
                        <span key={option.value}>{option.label}</span>
                    )
                )}
            <div className={styles.control}>
                <span>{choice.label}</span>
                {disabled || <SelectArrow className={active ? styles.reverse : undefined}/>}
            </div>

            {active && <div className={styles.selectOptions}>
                {options.map(option => {
                    return (
                        <span
                            key={option.value}
                            onClick={() => handleChoice(option)}
                        >
                            {option.label}
                        </span>
                    )
                })}
            </div>}
        </div>
    )
}