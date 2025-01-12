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
`