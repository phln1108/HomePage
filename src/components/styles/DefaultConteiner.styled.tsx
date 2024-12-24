import styled from "styled-components";

export const DefaultConteiner = styled.div`
    width: 100vw;
    min-height: 10vh;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    /* border: 1px solid white; */

    /* when are two near each other, the latest will apply this */
    & + & {
        margin-top: 2rem;
    }
`