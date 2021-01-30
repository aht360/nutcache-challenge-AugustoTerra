import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background: #f5f5f5;
        color: #333F48;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font-family: 'Raleway', serif;
        font-size: 16px;
    }
    button {
        cursor: pointer;
    }
`;