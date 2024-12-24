import { useState } from "react"

export const Btn = () => {
    const [s,setS] = useState<boolean>(false)

    const root = document.documentElement;
    root.className = s ? "teste" : ""

    return (
        <button
            onClick= {() => {
                console.log("aaa");
                setS(!s)
            }}
        >
            opa
        </button>
    )
}