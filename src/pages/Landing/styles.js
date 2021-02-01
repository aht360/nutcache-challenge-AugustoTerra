import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    img{
        width: 300px;
    }
    h1{
        font-size: 35px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 10px 0;
        text-align: center;
    }
    .cards-container{
        margin: 30px 0;
        width: 900px;
        min-height: 225px;
        max-height: 450px;
        overflow-y: scroll;
        background-color: #f5f5f5;
        border-radius: 12px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        @media(max-width: 600px){
            flex-direction: column;
            flex-wrap: nowrap;
            width: 100%;
        }
        
    }
    .register-btn{
        margin-top: 15px;
        width: 230px;
        height: 40px;
        background-color: #389488;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 16px;
        border: none;
        border-radius: 8px; 
    }
    .register-btn:hover{
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.08));
        transition: all linear .4s;
        background-color: #246e64;
    }
    .empty-employees{
        width: 100%;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .empty-employees-text{
        font-size: 32px;
        font-weight: 500;
        letter-spacing: -1px;
    }
    .container-employees-number{
        display: flex;
        justify-content: center;
    }
    .employees-number-text{
        font-weight: bold;
        font-size: 16px;
        text-transform: uppercase;
    }
    .searchbox-container{
        margin-top: 30px;

        input{
            width: 280px;
            border: 1px solid #c2c2c2;
            height: 35px;
            border-radius: 8px;
            font-size: 14px;
            padding: 5px;
            transition: all linear .3s;
        }
        input:focus{
            border: 1px solid #389488;
        }
    }
`;