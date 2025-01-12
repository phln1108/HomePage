import styled from "styled-components";

export const FormInputStyle = styled.div`
  
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 3rem;
    width: 20rem;
    background-color: var(--shadow-fg);
    border-bottom: 2px var(--shadow-fg) solid;

    padding: .2rem .8rem;
    cursor: text;


    &>label {
        position: absolute;
        bottom: 60%;
        padding-left: .25rem;

        font-size: var(--size-ss);

        transition: all .15s linear;
        cursor: text;
    }

    &>input {
        width: 100%;
        background-color: transparent;
        align-self: flex-end;

        font-size: var(--size-s);
        color: var(--blue600);
        font-weight: 400;
    }

    &>input::placeholder {
        font-weight: 600;
        font-size: var(--size-ss);
    }

    &:has(>input:disabled) {
        border-bottom: transparent;
    }

    &:has(> input:-webkit-autofill),
    &:has(> input:focus),
    &:has(> input:not(:placeholder-shown)) {
        border-bottom-color: var(--blue300);

    } 
`