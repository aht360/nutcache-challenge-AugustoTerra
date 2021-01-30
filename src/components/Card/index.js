import React, { useState, useEffect } from 'react';
import { CardEmployee } from './styles';
import { FiEdit2, FiXCircle } from "react-icons/fi";

const Card = ({ employee, toDeleteEmployee, openModal, toEditEmployee, openModalEdit }) => {
    const [ month, setMonth ] = useState('-');
    const [ year, setYear ] = useState('-');

    function handleClickDelete(employee){
        toDeleteEmployee(employee);
        openModal();
    }

    function handleClickEdit(employee){
        toEditEmployee(employee);
        openModalEdit();
    }

    useEffect(() => {
        if(employee.startdate){
            const [ gotYear, gotMonth ] = employee.startdate.split('-');
            setYear(gotYear)
            const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
            setMonth( months[Number(gotMonth) - 1])
        }
    }, [employee]);

    return (
        <>
        <CardEmployee>
            <div className="card-section-up">
                <div className="employee-info">
                    <p className="employee-name">
                        {employee.name}
                    </p>
                    <p className="employee-email">
                        {employee.email}
                    </p>
                </div>
                <div className="card-btn">
                    
                    <button className="btn-content" onClick={() => handleClickEdit(employee) }>
                        <FiEdit2 size={15} />
                        <p>Edit</p>
                    </button>
                    <button className="btn-content" onClick={() => handleClickDelete(employee) }>
                        <FiXCircle size={15} />
                        <p>Delete</p>
                    </button>
                </div>
            </div>
            <div className="middleLine"></div>
            <div className="card-section">
                <p className="employee-startDate">
                    {month} of {year}
                </p>
                <p className="employee-team">
                    {employee.team}
                </p>
            </div>
        </CardEmployee>
        </>
    );
}

export default Card;