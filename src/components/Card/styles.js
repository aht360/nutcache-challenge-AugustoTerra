import styled from 'styled-components';

export const CardEmployee = styled.div`
    width: 280px;
    height: 200px;
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
    cursor: default;
    .middleLine{
        width: 100%;
        height: 2px;
        background-color: #7ce0d3;
    }
    .card-section-up{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100px;
    }
    .employee-info{
        width: 190px;
        display: flex;
        flex-direction: column;
    }
    .card-section{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100px;
    }
    .card-btn{
        display: flex;
        flex-direction: column;
        margin: 25px 0;
    }
    .btn-content{
        background-color: #fff;
        border: none;
        color: #389488;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 9px;
        p{
            font-size: 14px;
            margin: 0 5px;
        }
    }
    .employee-name{
        font-size: 18px;
        font-weight: bold;
        letter-spacing: .3px;
        margin: 25px 0 5px 0;
        text-transform: uppercase; 
    }
    .employee-email{
        font-size: 14px;
        color: gray;
        font-weight: 500;
        letter-spacing: .5px;
    }
    .employee-startDate{
        font-size: 14px;
        letter-spacing: .7px;
    }
    .employee-team{
        font-weight: 500;
        font-size: 14px;
        text-transform: uppercase;
    }
    &:hover{
        transform: translateY(-3px);
        transition: all linear .1s;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.08));
    
    }
`;