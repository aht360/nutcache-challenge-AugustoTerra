import React, { useState } from 'react';
import Modal from '../Modal';
import { FiUser, FiCalendar, FiUsers, FiMail } from 'react-icons/fi';
import { Form } from './style';


const ModalRegisterEmployee = ({ isOpen, setIsOpen, handleRegisterEmployee }) => {
    
    const [ name, setName ] = useState(""); 
    const [ birthdate, setBirthdate ] = useState(""); 
    const [ gender, setGender ] = useState("Male"); 
    const [ email, setEmail ] = useState(""); 
    const [ cpf, setCpf ] = useState(""); 
    const [ startdate, setStartdate ] = useState(""); 
    const [ team, setTeam ] = useState("Mobile"); 

    async function handleSubmit(e){
        e.preventDefault()
        handleRegisterEmployee(name, birthdate, gender, email, cpf, startdate, team);
        setIsOpen(false);
    }

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <Form onSubmit={handleSubmit} >
                <h1>Register a new employee</h1>
                <div className="register-label" style={{ marginTop: '15px' }} >
                    <div className="register-label-content">
                        <FiUser size={20} />
                        <p className="register-label-text">
                            Name:
                        </p>
                    </div>
                    <input
                        type="text"
                        required
                        name="name"
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className="register-label">
                    <div className="register-label-content">
                        <FiCalendar size={20} />
                        <p className="register-label-text" >
                            Birth Date:
                        </p>
                    </div>
                    <input
                        type="date"
                        required
                        name="birthdate"
                        onChange={e => setBirthdate(e.target.value)}
                    />
                </div>

                <div className="register-label">
                    <div className="register-label-content">
                        <FiUsers size={20} />
                        <p className="register-label-text">
                            Gender:
                        </p>
                    </div>
                    <select name="gender" id="gender" required onChange={e => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="another">Another</option>
                    </select>
                </div>

                <div className="register-label">
                    <div className="register-label-content">
                        <FiMail size={20} />
                        <p className="register-label-text">
                            Email:
                        </p>
                    </div>
                    <input 
                        type="email"
                        required
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="register-label">
                    <div className="register-label-content">
                        <FiUser size={20} />
                        <p className="register-label-text">
                            CPF:
                        </p>
                    </div>
                    <input
                        type="text"
                        required
                        name="cpf"
                        onChange={e => setCpf(e.target.value)}
                    />
                </div>

                <div className="register-label">
                    <div className="register-label-content">
                        <FiCalendar size={20} />
                        <p className="register-label-text" >
                            Start Date:
                        </p>
                    </div>
                    <input
                        type="month"
                        required
                        name="startDate"
                        onChange={e => setStartdate(e.target.value)}
                    />
                </div>

                <div className="register-label">
                    <div className="register-label-content">
                        <FiUsers size={20} />
                        <p className="register-label-text">
                            Team:
                        </p>
                    </div>
                    <select name="team" id="team" onChange={e => setTeam(e.target.value)}>
                        <option value="Mobile">Mobile</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="None">None</option>
                    </select>
                </div>

                <button type="submit">Register</button>

            </Form>
        </Modal>
    );
}

export default ModalRegisterEmployee;