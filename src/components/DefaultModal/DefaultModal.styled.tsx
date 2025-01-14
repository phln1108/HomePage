import styled from "styled-components";



export const DefaultModalstyle = styled.div`
    align-self: center;
    
    border-radius: 16px;
    overflow: hidden;

    border: 4px solid var(--shadow-fg);

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    background-color: var(--fg);

    z-index: 999;

    &>.modalHeader {
        position: relative;
        display: flex ;
        justify-content: center;
        padding-top: .5rem ;

        &>button {
            position: absolute;
            top: 0;
            right: 0;

            &>svg {
                --primary: var(--shadow-fg);

                height: 3rem;
                width: 3rem;
            }
        }

        &>label {
            font-size: var(--size-3l);
            color: var(--shadow-fg);
        }
        
    }

    &>.modalButtons {
        width: 100%;
        display: flex;
        padding: 1rem;
        flex-direction: row;
        justify-content: space-around;
    }

    &>.modalButtons>button {
        width: 10rem;
        padding: .5rem 1rem;
        font-size: var(--size-m);
        font-weight: 900;
        color: var(--shadow-fg);
        border: 2px solid var(--shadow-fg);
        border-radius: 4px;
        
        transition: all linear .1s;
    }

    &>.modalButtons>button:hover {
        color: var(--fg);
        background-color: var(--font-color);
        border-color: var(--font-color);

    }

    &>.modalButtons>button:hover.cancel {
        color: var(--cancel-color);
        background-color: var(--cancel-hover-color);
        border-color: var(--cancel-hover-color);
    }
`