import { useContext, useState } from "react"
import { DefaultModal } from "../DefaultModal/DefaultModal.tsx"
import { Modal } from "./QuickLinkModal.styled.tsx"
import { LoginInput } from "../LoginInput/LoginInput"
import { DataContext } from "../../context/DataContext.tsx"
import { isValidUrl } from "../../Utils/functions.ts"


interface QuickLnkProps {
    onClose: () => void
}

export const QuickLinkModal = ({ onClose }: QuickLnkProps) => {
    const [label, setLabel] = useState<string>("")
    const [link, setLink] = useState<string>("")

    const {
        addQuickLink
    } = useContext(DataContext)

    const onSaveQuickLink = (): boolean => {
        if (!label || !link) {
            console.warn("Preencha tudo!")
            return false
        }

        if( !isValidUrl(link)) {
            console.warn("Link Invalido")
            return false
        }

        addQuickLink({
            name: label,
            link
        })

        return true
    }

    return (
        <DefaultModal
            onClose={onClose}
            title="New QuickLink"
            saveButton
            onSave={onSaveQuickLink}
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