import React from 'react';
import Modal from '../ModalConfirm';
import { Form } from './style';

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';


const ModalDeleteEmployee = ({ isOpen, setIsOpen, handleDeleteEmployee, employee }) => {

    async function handleSubmit(e){
        e.preventDefault()
        handleDeleteEmployee(employee)
        setIsOpen(false);
    }

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <Form onSubmit={handleSubmit} >
                <h1>Are you sure?</h1>
                <div className="btn-confirm">
                    <button onClick={handleSubmit}> <FaCheckCircle style={{ marginRight: '5px' }} /> YES</button>
                    <button className="cancel-btn" onClick={ () => { setIsOpen(false)} }> <FaTimesCircle style={{ marginRight: '5px' }} />NO</button>
                </div>
            </Form>
        </Modal>
    );
}

export default ModalDeleteEmployee;