import { SearchIcon, DropDownIcon } from "../../assets/Icons"
import { DefaultConteiner } from "../styles/DefaultConteiner.styled"
import { Divider } from "../styles/Divider.style.tsx"
import { DropDown, SearchBarDiv } from "./SearchBar.style.tsx"
import { SearchEngineList } from "../../services/SearchEngineAPI.ts"
import { DataContext } from "../../context/DataContext.tsx"
import { useContext } from "react"


export const SearchBar = () => {
    const {
        searchEngine,
        setSearchEngine
    } = useContext(DataContext)

    const selectedEngine = SearchEngineList[searchEngine]

    return (
        <SearchBarDiv>
            <SearchIcon />
            <input type="text" placeholder="Pesquise algo " />
            <Divider />
            <DropDown onSubmit={e => e.preventDefault()}>
                <button onClick={e => e.preventDefault()}>
                    <img src={selectedEngine.icon} alt={selectedEngine.name} />
                    <DropDownIcon />
                </button>
                <ul>
                    {SearchEngineList.map((engine, i) => (
                        <button
                            key={engine.name}
                            onClick={e => { e.preventDefault(); setSearchEngine(i) }}
                        >
                            <img src={engine.icon} />
                            <label>{engine.name}</label>
                        </button>
                    ))}
                </ul>
            </DropDown>
        </SearchBarDiv>
    )
}