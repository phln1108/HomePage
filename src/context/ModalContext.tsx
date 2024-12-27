import { createContext } from "react";


interface ModalContextProps {

}

export const ModalContext = createContext({} as ModalContextProps)

interface ModalProviderProps {
    children: any;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {

    const values: ModalContextProps = {
    }

    return (
        <ModalContext.Provider value={values}>
            {children}
        </ModalContext.Provider>
    )
}

