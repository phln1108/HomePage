import { createContext, useState } from "react";
import { QuickLinkModal } from "../components/QuickLinkModal/QuickLinkModal";
import { ModalWrapper } from "../components/styles/ModalWrapper.styled";
import { QuickLink } from "../Utils/DataStructure";
import { TaskModal } from "../components/TaskModal/TaskModal";


interface ModalContextProps {
    openQuickLinkModal: (quickLink?: QuickLink) => void;
    openTaskModal: () => void;
}

export const ModalContext = createContext({} as ModalContextProps)

interface ModalProviderProps {
    children: any;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [quickLinkModal, setQuickLinkModal] = useState<boolean>(false)
    const [quickLink, setQuickLink] = useState<QuickLink | undefined>()

    const [taskModal, setTaskModal] = useState<boolean>(false)

    const showModal: boolean = (
        quickLinkModal ||
        taskModal
    )

    const closeAllModals = () => {
        setQuickLinkModal(false)
        setTaskModal(false)
    }

    const openQuickLinkModal = (editQuickLink?: QuickLink) => {
        setQuickLinkModal(true)
        setQuickLink(editQuickLink)
    }

    const values: ModalContextProps = {
        openQuickLinkModal,
        openTaskModal: () => setTaskModal(true),
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
                    {taskModal &&
                        <TaskModal
                            onClose={() => setTaskModal(false)}
                        />
                    }
                </ModalWrapper>
            }
        </ModalContext.Provider>
    )
}

