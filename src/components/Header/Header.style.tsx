import styled from "styled-components";
import { DefaultConteiner } from "../styles/DefaultConteiner.styled";

export const NavHeader = styled(DefaultConteiner)`
    flex-direction: column;
    gap: 2rem;
` 

export const LogoWrapper = styled.div`
    
    display: flex;
    flex-direction: row;
    
    &>h1 {
        color: var(--font-color);
        font-size: var(--font-title);
    }
`