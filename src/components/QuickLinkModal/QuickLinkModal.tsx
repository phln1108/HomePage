import { useContext, useRef, useState } from "react"
import { DefaultModal } from "../DefaultModal/DefaultModal.tsx"
import { Modal } from "./QuickLinkModal.styled.tsx"
import { InputLoginHandler, LoginInput } from "../LoginInput/LoginInput"
import { DataContext } from "../../context/DataContext.tsx"
import { QuickLink } from "../../Utils/DataStructure.ts"


interface QuickLinkProps {
    onClose: () => void
    quickLink?: QuickLink
}

export const QuickLinkModal = ({ onClose, quickLink }: QuickLinkProps) => {
    const [label, setLabel] = useState<string>(quickLink?.name || "")
    const [link, setLink] = useState<string>(quickLink?.link || "")

    const labelref = useRef<InputLoginHandler | null>(null)
    const linkref = useRef<InputLoginHandler | null>(null)

    const {
        addQuickLink,
        editQuickLink
    } = useContext(DataContext)

    const onSaveQuickLink = (): boolean => {
        if (!label) {
            labelref.current?.focus()
            console.warn("Preencha tudo!")
            return false
        }

        if (!link) {
            linkref.current?.focus()
            console.warn("Preencha tudo!")
            return false
        }

        if (quickLink) {
            editQuickLink({
                ...quickLink,
                name: label,
                link
            })
            return true
        }

        try {
            new URL(link)
            addQuickLink({
                id: new Date().getTime(),
                name: label,
                link,
            })
            return true
        } catch (_) {
            console.warn("Link Invalido")
            linkref.current?.focus()
            return false
        }
    }

    return (
        <DefaultModal
            onClose={onClose}
            title={(quickLink? "Edit" : "New") + " QuickLink"}
            saveButton
            onSave={onSaveQuickLink}
        >
            <Modal>
                <LoginInput
                    value={label}
                    placeholder="Label"
                    onChange={e => setLabel(e.target.value)}
                    required
                    ref={labelref}
                    onEnter={() => onSaveQuickLink() && onClose() }
                    autoFocus
                />
                <LoginInput
                    value={link}
                    placeholder="Link"
                    onChange={e => setLink(e.target.value)}
                    required
                    ref={linkref}
                    onEnter={() => onSaveQuickLink() && onClose() }
                />
            </Modal>
        </DefaultModal>
    )
}