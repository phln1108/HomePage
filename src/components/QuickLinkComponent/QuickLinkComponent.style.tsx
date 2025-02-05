import styled from "styled-components";
import { LoaderStyled } from "../Loader/Loader";

export const QuickLinkStyle = styled.div<{ $transparent?: boolean }>`
    position: relative;
    
    width: 7.5rem;
    height: 8.75rem;

    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;

    padding-top: 1rem;

    gap: .5rem;

    text-decoration: none !important;

    cursor: pointer;

    &>svg {
        z-index: 1;
        margin: .5rem 0;
    }

    &>img {
        z-index: 1;
        width: 5rem;
        border-radius: 8px;
    }

    &>label{
        text-align: center;
    }

    ${LoaderStyled} {
        z-index: 1;
        margin: .5rem 0;
    }

    &::before {
        content: "";

        position: absolute;
        top: 1rem;
        
        border-radius: 8px;

        width: 5rem;
        height: 5rem;

        background-color: ${props => props.$transparent ? "transparent" : "var(--fg)"};
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
    
    &:hover {
        background-color: var(--shadow-fg);

        &>button {
            visibility: visible;
        }
    }

    &>button {
        position: absolute;

        top: .25rem;
        right: .25rem;
        z-index: 2;
        
        visibility: collapse;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--fg);
        
        border-radius: .75rem;
        padding:  .25rem;


        &>svg {
            position: relative;

            width: 1rem;
            height: 1rem;
            border-radius: 50%;

            --primary: var(--font-color);
        }

        &:hover {
            scale: 1.2;
        }
    }

    
`

export const OptionsModal = styled.div`
    position: absolute;

    visibility: collapse;

    z-index: 2;
    top: 1.875rem;
    right: .875rem;

    display: flex;
    flex-direction: column;
    justify-content: baseline;

    background-color: var(--fg);

    border-radius: 8px 0 8px 8px;

    overflow: hidden;

    &>button {
        padding: 0 .25rem ;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px inset, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px inset;
            color: var(--fg);
            background-color: var(--font-color);
        }

        &.alert:hover {
            color: var(--cancel-color);
            background-color: var(--cancel-hover-color);
        }
    }

    &>button:first-child {
        padding-top: .25rem;
    }

    &>button:last-child {
        padding-bottom: .25rem;
    }

    ${QuickLinkStyle}>button:focus ~ &,
    ${QuickLinkStyle}>button:active ~ &,
    &:hover,
    &:has(button:active) {
            visibility: visible;
            /* transform: scaleY(1);

            transition-delay: .5s;
            transition: transform .1s ease-in-out; */
    }

`