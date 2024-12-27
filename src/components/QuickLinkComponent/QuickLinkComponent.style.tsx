import styled from "styled-components";

export const QuickLinkStyle = styled.button`
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

    &::before {
        content: "";

        position: absolute;
        top: 1rem;
        
        border-radius: 8px;

        width: 5rem;
        height: 5rem;

        background-color: var(--fg);
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

        &>svg {
            position: relative;

            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;

            --primary: var(--fg);
        }

        &:hover {
            scale: 1.2;
        }
    }
`

