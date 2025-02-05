import { createContext, useState } from "react";
import { QuickLinkModal } from "../components/QuickLinkModal/QuickLinkModal";
import { ModalWrapper } from "../components/styles/ModalWrapper.styled";
import { QuickLink } from "../Utils/DataStructure";


interface ModalContextProps {
    openQuickLinkModal: (quickLink?: QuickLink) => void;
}

export const ModalContext = createContext({} as ModalContextProps)

interface ModalProviderProps {
    children: any;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [quickLinkModal, setQuickLinkModal] = useState<boolean>(false)
    const [quickLink, setQuickLink] = useState<QuickLink | undefined>()

    const showModal: boolean = (
            quickLinkModal
        )

    const closeAllModals = () => {
        setQuickLinkModal(false)
    }

    const openQuickLinkModal = (editQuickLink?: QuickLink) => {
        setQuickLinkModal(true)
        setQuickLink(editQuickLink)
    }

    const values: ModalContextProps = {
        openQuickLinkModal
    }

    return (
        <ModalContext.Provider value={values}>
            {children}
            {showModal &&
                <ModalWrapper >
                    <div className="closeModal" onClick={closeAllModals} />
                    {quickLinkModal &&
                        <QuickLinkModal
                            onClose={() => setQuickLinkModal(false)}
                            quickLink={quickLink}
                        />
                    }
                </ModalWrapper>
            }
        </ModalContext.Provider>
    )
}

