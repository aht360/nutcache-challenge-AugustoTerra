import styled from 'styled-components';

export const Form = styled.form`
    margin: 15px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size: 32px;
        text-transform: uppercase;
        letter-spacing: 1px;
        width: 300px;
        text-align: center;
        color: #389488;
    }
    .register-label{
        margin: 3px 0;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        width: 100%;
        input{
            width: 300px;
            height: 25px;
            padding: 3px;
            font-size: 14px;
            border: 1px solid #c2c2c2;
            border-radius: 4px;
        }
        select{
            width: 300px;
            height: 25px;
            padding: 3px;
            font-size: 14px;
            border: 1px solid #c2c2c2;
            border-radius: 4px;
        }
    }
    .register-label-text{
        margin-left: 5px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: .3px;
        text-transform: uppercase;
    }
    .register-label-content{
        display: flex;
        align-items: center;
        margin-bottom: 4px;
    }
    button{
        margin-top: 20px;
        width: 300px;
        height: 30px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        background-color: #389488;
        border: none;
        border-radius: 8px; 
    }
`;