import { useContext} from "react"
import { QuickLinkComponent, QuickLinkEmpty } from "../QuickLinkComponent/QuickLinkComponent"
import { DefaultConteiner } from "../styles/DefaultConteiner.styled"
import { DataContext } from "../../context/DataContext"


export const QuickLinkWrapper = () => {
    const {
        quickLinks,
        removeQuickLink
    } = useContext(DataContext)

    return (
        <DefaultConteiner>
            {quickLinks.map(quickLink => (
                <QuickLinkComponent 
                quickLink={quickLink} 
                key={quickLink.link}
                onRemove={() => removeQuickLink(quickLink)}
                />
            ))}
            <QuickLinkEmpty/>
        </DefaultConteiner>
    )
}