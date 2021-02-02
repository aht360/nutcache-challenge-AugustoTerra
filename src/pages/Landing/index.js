import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from './styles';
import Card from '../../components/Card';
import ModalRegisterEmployee from '../../components/ModalRegisterEmployee';
import ModalDeleteEmployee from '../../components/ModalDeleteEmployee';
import ModalEditEmployee from '../../components/ModalEditEmployee';
import logo from '../../assets/logo-nutcache.png';
import api from '../../services/api';

const Landing = () => {
    
    const [ len, setLen ] = useState(0)
    const [ employees, setEmployees ] = useState([]);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ modalEditOpen, setModalEditOpen ] = useState(false);
    const [ modalDeleteOpen, setModalDeleteOpen ] = useState(false);
    const [ editingEmployee, setEditingEmployee ] = useState(null);
    const [ deletingEmployee, setDeletingEmployee ] = useState(null);
    const [ searchfield, setSearchfield ] = useState("");
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData(){       
        const { data } = await api.get('/nutemployee');
        setEmployees(data)
        setLen(data.length)
        setLoading(false);
    }

    async function handleRegisterEmployee(name, birthdate, gender, email, cpf, startdate, team, hasTeam){
        try{
            if(!hasTeam){
                team = "-";
            }
            await api.post('/nutemployee', {
                name,
                birthdate,
                gender,
                email,
                cpf,
                startdate,
                team,
                hasTeam
            });
            const myPromise = fetchData();
    
            toast.promise(myPromise, {
                loading: 'Loading...',
                success: 'Successfully registered!',
                error: 'Error when fetching',
            });
        } catch(e){
            toast.error('API communication error');
        }
    }


    async function handleDeleteEmployee(employee){
        try{
            await api.delete('/nutemployee/' + employee._id);
            const myPromise = fetchData();
    
            toast.promise(myPromise, {
                loading: 'Loading...',
                success: 'Successfully deleted!',
                error: 'Error when fetching',
            });
        } catch(e){
            toast.error('API communication error');
        }
        
    }

    async function handleEditEmployee(id, name, birthdate, gender, email, cpf, startdate, team, hasTeam){
        try{
            if(!hasTeam){
                team = "-";
            }
            if(hasTeam && team === "-"){
                team = "Mobile";
            }
            await api.put(`/nutemployee/${id}`, {
                name,
                birthdate,
                gender,
                email,
                cpf,
                startdate,
                team,
                hasTeam
            })
            const myPromise = fetchData();
    
            toast.promise(myPromise, {
                loading: 'Loading...',
                success: 'Successfully edited!',
                error: 'Error when fetching',
            });
        } catch(e){
            toast.error('API communication error');
        }
        
    }

    function toggleModal() {
        setModalOpen(!modalOpen);
    }

    function toggleModalEdit() {
        setModalEditOpen(!modalEditOpen);
    }

    function toggleModalDelete() {
        setModalDeleteOpen(!modalDeleteOpen);
    }


    function toDeleteEmployee(employee){
        setDeletingEmployee(employee);
    }

    function toEditEmployee(employee){
        setEditingEmployee(employee);
    }

    const filteredEmployees = employees.filter( employee => {
        return employee.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    

    return (
        <>
            <ModalRegisterEmployee
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                handleRegisterEmployee={handleRegisterEmployee}
            />
            <ModalDeleteEmployee
                isOpen={modalDeleteOpen}
                setIsOpen={toggleModalDelete}
                handleDeleteEmployee={handleDeleteEmployee}
                employee={deletingEmployee}
            />
            <ModalEditEmployee 
                isOpen={modalEditOpen}
                setIsOpen={toggleModalEdit}
                handleEditEmployee={handleEditEmployee}
                employee={editingEmployee}
            />
            <Container>
                <img src={logo} alt="Nutcache logo"/>
                <h1>People Management</h1>
                <h2>Employee Information</h2>
                <button 
                    className="register-btn" 
                    onClick={() => { toggleModal()}}
                >
                    Register an employee
                </button>
                {
                    len !== 0 &&
                    <div className="searchbox-container">
                        <input 
                            type="text" 
                            placeholder="Search for an employee by name"
                            onChange={ (e) => setSearchfield(e.target.value) } 
                            value={searchfield}
                        />
                    </div>
                }
                <div className="cards-container">
                    {
                        filteredEmployees.map(employee => (
                            <Card 
                                key={employee._id}
                                employee={employee}
                                toDeleteEmployee={toDeleteEmployee}
                                toEditEmployee={toEditEmployee}
                                openModal={toggleModalDelete}
                                openModalEdit={toggleModalEdit}
                            />
                        ))
                    }
                    {
                        loading &&
                        <div className="empty-employees">   
                            <ClipLoader />
                        </div>
                    }
                    {
                        filteredEmployees.length === 0 && !loading &&
                        <div className="empty-employees">
                            <p className="empty-employees-text">
                                No employee has been found
                            </p>
                        </div>
                    }
                </div>
                {
                    !loading &&
                <div className="container-employees-number">
                    <p className="employees-number-text">
                        Employees found: {filteredEmployees.length}
                    </p>
                </div>
                }
            </Container>
            <Toaster
                position="top-right"
            />
        </>
    );
}

export default Landing;