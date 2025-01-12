import { useState } from "react"
import { DefaultModal } from "../DefaultModal/DefaultModal.tsx"
import { Modal } from "./QuickLinkModal.styled.tsx"
import { LoginInput } from "../LoginInput/LoginInput"


interface QuickLnkProps {
    onClose: () => void
}

export const QuickLinkModal = ({ onClose }: QuickLnkProps) => {
    const [label, setLabel] = useState<string>()
    const [link, setLink] = useState<string>()



    return (
        <DefaultModal 
        onClose={onClose}
        title="Add QuickLink"
        >
            <Modal>
                <LoginInput
                    value={label}
                    placeholder="Label"
                    onChange={e => setLabel(e.target.value)}
                />
                <LoginInput
                    value={link}
                    placeholder="Link"
                    onChange={e => setLink(e.target.value)}
                />
            </Modal>
        </DefaultModal>
    )
}