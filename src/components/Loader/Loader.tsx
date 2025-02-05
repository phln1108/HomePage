import styled, { keyframes } from "styled-components";
import { LoadingIcon } from "../../assets/Icons";

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const LoaderStyled = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    align-self: center;

    animation-name: ${spin};
    animation-duration: 1500ms;
    animation-play-state: running;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
`

export const Loader = () => (
    <LoaderStyled>
        <LoadingIcon/>
    </LoaderStyled>
)

