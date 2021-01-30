import styled from 'styled-components';

export const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .btn-confirm{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
    }
    h1{
        font-size: 32px;
        text-transform: uppercase;
        letter-spacing: 1px;
        width: 300px;
        text-align: center;
        color: black;
    }
    button{
        width: 100px;
        height: 30px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        background-color: #389488;
        border: none;
        border-radius: 8px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .cancel-btn{
        background-color: #f06565;
    }
`;