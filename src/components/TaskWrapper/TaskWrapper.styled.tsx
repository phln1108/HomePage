import styled from "styled-components";

export const TodoListConteiner = styled.div`
    position: relative;
    
    width: 60rem;
    height: 40rem;
    
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    border: 2px solid currentColor;
    border-radius: 8px;

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &>header {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        border-bottom: 2px solid currentColor;
        padding: 1rem 0;


        &>label {
            width: 100%;

            text-align: center;

            font-size: var(--size-3l);
            font-style: bold;

        }

        &>button {
            position: absolute;

            right: 0;

            margin: 0 1rem;

            border-radius: 8px;

            transition: all .2s;

            &>svg {
                width: 3.25rem;
                height: 3.25rem;
            }

            &:hover {
                background-color: var(--shadow-fg);
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }
        }
    }
`