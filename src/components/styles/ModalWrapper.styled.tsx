import styled from "styled-components"

export const ModalWrapper = styled.div`
    position: fixed;

    top: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-content: center;


    z-index: 999;

    &>.closeModal {
        position: absolute;
        background-color: rgba(0,0,0,0.4);
        width: 100vw;
        height: 100vh;
    }
` 