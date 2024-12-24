import ddg_logo from "../assets/duckduckgo-icon.svg"
import google_logo from "../assets/google-icon.svg"
import brave_icon from "../assets/brave-icon.svg"


export interface SearchEngine {
    name: string,
    icon: string,

}


export const SearchEngineList: SearchEngine[] = [
    {
        name: "Duck Duck GO",
        icon: ddg_logo
    },
    {
        name: "Google",
        icon: google_logo
    },
    {
        name: "Brave",
        icon: brave_icon
    }
]