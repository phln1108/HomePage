import styled from "styled-components";
import { DefaultConteiner } from "../styles/DefaultConteiner.styled";

export const NavHeader = styled(DefaultConteiner)`
    &>img {
        /* width: 2rem; */
    }

    &>h1 {
        color: var(--font-color);
        font-size: var(--font-title);
    }
` 