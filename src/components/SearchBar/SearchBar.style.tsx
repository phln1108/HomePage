import styled from "styled-components";

export const SearchBarDiv = styled.form`
    position: relative;

    width: 35rem;
    height: 3rem;

    display: flex;
    flex-direction: row;
    justify-content: baseline;
    align-items: center;

    background-color: var(--fg);

    border-radius: 24px;

    gap: .25rem;

    padding-right: .25rem;

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &>input[type=text] {
        position: relative;

        width: 100%;
        height: 100%;

        background-color: transparent;

        font-size: var(--size-ll);
    }

    &>svg{
        height: 2rem;  
        margin: 0 -.25rem;
    }
`

export const DropDown = styled.div`
    position: relative;

    height: 100%;
    width: 5rem;

    & img {
        height: 2rem;
    }

    &>button {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        padding: 0 .25rem;

        &>svg{
            height: 1.5rem;
            width: 1.5rem; 
            
            rotate: 180deg;
            transition: rotate .25s ease-in-out;
        }
    }

    &>ul {
        position: absolute;
        right: 0;

        height: auto;

        display: flex;
        flex-direction: column;
        overflow: hidden;
        
        background-color: var(--fg);
        
        /* padding: .5rem 0; */
        
        border-radius: 16px 0 16px 16px;
        margin-top: 3px;
        
        visibility: collapse;
        transform-origin: 100% 0;
        transform: scaleY(0);

        transition: visibility 0s linear .2s, transform .1s ease-in-out;

        z-index: 2;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;


        &>button:first-child {
            padding-top: .5rem;
        }

        &>button:last-child {
            padding-bottom: .5rem;
        }

        &>button {
            position: relative;

            height: 3rem;
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
    &>ul:hover,
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


