import { useState } from "react"
import { SearchIcon, DropDownIcon } from "../../assets/Icons"
import { DefaultConteiner } from "../styles/DefaultConteiner.styled"
import { Divider } from "../styles/Divider.style.tsx"
import { DropDown, SearchBarDiv } from "./SearchBar.style.tsx"
import { SearchEngine, SearchEngineList } from "../../services/SearchEngineAPI.ts"


export const SearchBar = () => {
    const [selectedEngine, setSelectedEngine] = useState<SearchEngine>(SearchEngineList[0])

    return (
        <DefaultConteiner>
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
                        {SearchEngineList.map(engine => (
                            <button
                                key={engine.name}
                                onKeyDown={() => { setSelectedEngine(engine) }}
                                onClick={e => {e.preventDefault();  setSelectedEngine(engine) }}
                            >
                                <img src={engine.icon} />
                                <label>{engine.name}</label>
                            </button>
                        ))}
                    </ul>
                </DropDown>
            </SearchBarDiv>
        </DefaultConteiner>
    )
}