import styled from "styled-components"

const Bg = require("../../../assets/imgs/fundo01.jpg");

const ScreenSize = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* min-width: 10%; */
    height: 100vh;
    background-image: url(${Bg});
    background-size: cover;
    z-index: -10;
`
export default ScreenSize;