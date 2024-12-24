import logo from "../../assets/logo.svg"
import { NavHeader } from "./Header.style"

export const Header = () => {
    return (
        <NavHeader>
            <img src={logo} />
            <h1>Project Name</h1>
        </NavHeader>
    )
} 