import { KeyboardEventHandler, useImperativeHandle, useRef, useState } from "react"
import styles from "./LoginInput.module.css"
import React from "react";

export type InputLoginHandler = {
    error: () => void;
    focus: () => void;
}

interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onEnter?: () => void;
 }

export const LoginInput = React.forwardRef<InputLoginHandler,LoginInputProps>((props: LoginInputProps, ref) => {

    const [showPass, setShowPass] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        error() {
            setError(true)
        },
        focus () {
            inputRef.current?.focus()
        }
    }))

    const handle_showPassClick = () => {
        setShowPass(!showPass)
    }

    const handleKeyPress = (event: any) => {
        if(event.key === 'Enter'){
          props.onEnter?.()
        }
      }

    var pl = props.placeholder
    return (
        <div className={`${styles.inputWrapper} ${error ? styles.error : ""}`}>
            {pl && <label>{pl}</label>}
            <input
                onFocus={() => setError(false)}
                {...props}
                placeholder=" "
                type={props.type == "password" ? (showPass ? "text" : "password") : props.type}
                ref={inputRef}
                onKeyDown={handleKeyPress}
            />
            {props.type == "password" && <div className={styles.showPass}>
                <img
                    src={showPass ? "src/assets/passShow.svg" : "src/assets/passHide.svg"}
                    onClick={handle_showPassClick}
                />
            </div>}

        </div>
    )
})