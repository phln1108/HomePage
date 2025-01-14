import { createContext, useEffect, useState } from "react";
import { QuickLinkModal } from "../components/QuickLinkModal/QuickLinkModal";
import { ModalWrapper } from "../components/styles/ModalWrapper.styled";


interface ModalContextProps {
    setQuickLinkModal: (state: boolean) => void;
}

export const ModalContext = createContext({} as ModalContextProps)

interface ModalProviderProps {
    children: any;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [quickLinkModal, setQuickLinkModal] = useState<boolean>(false)

    useEffect(() => {
        setShowModal(
            quickLinkModal
        )
    }, [
        quickLinkModal
    ])

    const closeAllModals = () => {
        setQuickLinkModal(false)
    }

    const values: ModalContextProps = {
        setQuickLinkModal
    }

    return (
        <ModalContext.Provider value={values}>
            {children}
            {showModal &&
                <ModalWrapper >
                    <div className="closeModal" onClick={closeAllModals}/>
                    {quickLinkModal && <QuickLinkModal  onClose={() => setQuickLinkModal(false)}/>}
                </ModalWrapper>
            }
        </ModalContext.Provider>
    )
}

