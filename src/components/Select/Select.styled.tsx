import styled from "styled-components";

export const SelectStyled = styled.div`
    position: relative;

    height: 2rem;
    width: 7rem;

    & img {
        height: 2rem;
    }

    &>button {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
        /* gap: .5rem; */
        padding: 0 .5rem;

        &>svg{
            height: 1.5rem;
            width: 1.5rem; 
            
            rotate: 180deg;
            transition: rotate .25s ease-in-out;
        }

        &>label {
            font-size: var(--size-m);
        }
    }

    &>ul {
        position: absolute;
        right: 10%;

        height: auto;
        width: 80%;

        display: flex;
        flex-direction: column;
        overflow: hidden;
        
        background-color: var(--shadow-fg);
        
        /* padding: .5rem 0; */
        
        border-radius: 16px 0 16px 16px;
        margin-top: 0;
        
        visibility: collapse;
        transform-origin: 100% 0;
        transform: scaleY(0);

        transition: visibility 0s linear .2s, transform .1s ease-in-out;

        z-index: 2;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;


        &>button:first-child {
            padding-top: .25rem;
        }

        &>button:last-child {
            padding-bottom: .25rem;
        }

        &>button {
            position: relative;

            height: 2rem;
            width: 100%;
            
            display: flex;
            justify-content: baseline;
            align-items: center;
            gap: 1rem;
            
            padding: 0 .5rem;

            &:hover {
                box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px inset, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px inset;
            }
            &>label {
                width: max-content;
            }

            & + button::after {
                content: "";
                
                position: absolute;
                top: 0;

                width:  calc(100% - 1rem);
                height: 2px;

                border-radius: 8px;

                opacity: .2;

                background-color: var(--font-color);
            }
        }
    }

    &>button:focus ~ ul,
    &>button:active ~ ul,
    &>ul:has(button:active) {
            visibility: visible;
            transform: scaleY(1);

            transition-delay: .5s;
            transition: transform .1s ease-in-out;
    }

    &>button:focus>svg,
    &>button:active>svg,
    &:has(>ul:hover)>button>svg {
        rotate: 0deg;
    }

    &::after {
        content: "";

        position: absolute;
        right: 0;
        top: 0;
        
        width: 0;
        height: 0;
        
        border-bottom: 4px solid var(--font-color);
    }
`