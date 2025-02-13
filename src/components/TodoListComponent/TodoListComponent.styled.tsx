import styled from "styled-components";


export const TodoListComponentStyle = styled.div<{ $done?: boolean }>`
    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    
    /* padding: 0 .5rem; */

    border-bottom: 2px solid currentColor;

    &>.time{
        position: relative;
        
        /* height: 100%; */
        
        /* display: flex; */
        /* align-items: center; */

        padding: 0 .5rem;
        

        &>label {
            font-size: var(--size-l);
        }

        &>span {
            font-size: var(--size-ss);
            opacity: .6;
        }

        
    }

    &>label {
        width: 100%;

        font-size: var(--size-l);

        text-decoration: ${props => props.$done ? "line-through" : "none"};

        opacity:${props => props.$done ? ".5" : "1"} ;

        padding: 0 .5rem;
    }

    &>button {
        position: relative;

        &>svg{
            height: 2.5rem;
            width: 2.5rem;
        }
    }
`

export const Spacer = styled.div`
    width: 2px;
    height: 60%;

    background-color: currentColor;

    opacity: .2;

    border-radius: 16px;

    /* margin: 0 .5rem ; */
`