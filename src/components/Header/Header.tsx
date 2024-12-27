import { LogoIcon } from "../../assets/Icons"
import { SearchBar } from "../SearchBar/SearchBar"
import { LogoWrapper, NavHeader } from "./Header.style"

export const Header = () => {
    return (
        <NavHeader>
            <LogoWrapper>
                <LogoIcon />
                <h1>Project Name</h1>
            </LogoWrapper>
            <SearchBar/>
        </NavHeader>
    )
} 