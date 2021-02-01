import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { FiUser, FiCalendar, FiUsers, FiMail, FiXCircle } from 'react-icons/fi';
import { Form } from './style';
import { cpfMask } from '../../mask';

const ModalRegisterEmployee = ({ isOpen, setIsOpen, handleEditEmployee, employee }) => {
    
    const [ id, setId ] = useState("");
    const [ name, setName ] = useState(""); 
    const [ birthdate, setBirthdate ] = useState(""); 
    const [ gender, setGender ] = useState("Male"); 
    const [ email, setEmail ] = useState(""); 
    const [ cpf, setCpf ] = useState(""); 
    const [ startdate, setStartdate ] = useState(""); 
    const [ team, setTeam ] = useState("Mobile"); 

    async function handleSubmit(e){
        e.preventDefault()
        handleEditEmployee(id, name, birthdate, gender, email, cpf, startdate, team);
        setIsOpen(false);
    }

    useEffect(() => {
        if(employee){
            setId(employee._id);
            setName(employee.name);
            setBirthdate(employee.birthdate);
            setGender(employee.gender);
            setEmail(employee.email);
            setCpf(employee.cpf);
            setStartdate(employee.startdate);
            setTeam(employee.team);
        }
    }, [employee])

    return(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <Form onSubmit={handleSubmit} >
                <FiXCircle className="close-icon" onClick={ () => { setIsOpen(false) } } size={25} />
                <h1>Edit a employee</h1>
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
                        value={name}
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
                        value={birthdate}
                    />
                </div>

                <div className="register-label">
                    <div className="register-label-content">
                        <FiUsers size={20} />
                        <p className="register-label-text">
                            Gender:
                        </p>
                    </div>
                    <select name="gender" id="gender" required onChange={e => setGender(e.target.value)} value={gender} >
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
                        value={email}
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
                        onChange={e => setCpf(cpfMask(e.target.value))}
                        value={cpf}
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
                        value={startdate}
                    />
                </div>

                <div className="register-label">
                    <div className="register-label-content">
                        <FiUsers size={20} />
                        <p className="register-label-text">
                            Team:
                        </p>
                    </div>
                    <select name="team" id="team" onChange={e => setTeam(e.target.value)} value={team}>
                        <option value="Mobile">Mobile</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="None">None</option>
                    </select>
                </div>

                <button type="submit">Edit</button>

            </Form>
        </Modal>
    );
}

export default ModalRegisterEmployee;