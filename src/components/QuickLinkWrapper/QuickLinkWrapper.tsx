import { QuickLink } from "../../Utils/DataStructure"
import { QuickLinkComponent, QuickLinkEmpty } from "../QuickLinkComponent/QuickLinkComponent"
import { DefaultConteiner } from "../styles/DefaultConteiner.styled"

const quickListMocked: QuickLink[] = [
    {
        name: "Crunchroll",
        link: "https://www.crunchyroll.com/pt-br/"
    },
    {
        name: "AVA",
        link: "https://ead.unifor.br/ava/login/page/acesso.php"
    }
]
export const QuickLinkWrapper = () => {
    return (
        <DefaultConteiner>
            {quickListMocked.map(quickLink => (
                <QuickLinkComponent 
                quickLink={quickLink} 
                key={quickLink.name}
                onRemove={() => {}}
                />
            ))}
            <QuickLinkEmpty/>
        </DefaultConteiner>
    )
}