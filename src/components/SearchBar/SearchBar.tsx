import { SearchIcon, DropDownIcon } from "../../assets/Icons"
import { Divider } from "../styles/Divider.style.tsx"
import { DropDown, SearchBarDiv } from "./SearchBar.style.tsx"
import { SearchEngineList } from "../../services/SearchEngineAPI.ts"
import { DataContext } from "../../context/DataContext.tsx"
import { useContext, useRef, useState } from "react"


export const SearchBar = () => {
    const {
        searchEngine,
        setSearchEngine
    } = useContext(DataContext)

    const selectedEngine = SearchEngineList[searchEngine]


    const ref = useRef<HTMLButtonElement>(null)

    const [focused, setFocused] = useState<number>(0)

    const handleClick = () => {
        if (focused + 1 > 2) {
            ref.current?.blur()
        } else {
            setFocused(focused + 1)
        }
    }

    return (
        <SearchBarDiv>
            <SearchIcon />
            <input type="text" placeholder="Pesquise algo " />
            <Divider />
            <DropDown onSubmit={e => e.preventDefault()}>
                <button
                    ref={ref}
                    onClick={e => { e.preventDefault(); handleClick() }}
                    onFocus={() => setFocused(1)}
                    onBlur={() => setFocused(0)}
                >

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