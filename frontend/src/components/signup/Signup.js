import React, { useState } from 'react'
import './signup.scss'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const history = useNavigate();

    const [Inputs, setInputs] = useState({
        email: "", 
        username: "",
        password: "",
    });

    const change = (e) =>{
        const {name, value} = e.target
        setInputs({...Inputs, [name]: value}); 
    };

    const submit = async(e) =>{
        e.preventDefault();
        await axios
        .post("http://localhost:3005/signup", Inputs)
        .then((response) =>{
            if(response.data.message === "Utilisateur existant"){
                alert(response.data.message);
            }else{
                alert(response.data.message);
                setInputs({
                    email: "", 
                    username: "",
                    password: "",
                });
                history("/signin")
            }

        });


    };

  return (
    <div className='signup'>
        <div className='container'>
            <div className='row'>
                <div className='container-signup col-lg-8 d-flex justify-content-center align-items-center '>
                    <div className='d-flex flex-column w-100 p-3'>
                        <input
                         className='p-2 my-3 input-signup'
                         type='email'
                         name='email'
                         placeholder='Enter your mail'
                         onChange={change}
                         value={Inputs.email}
                        />
                        <input
                         className='p-2 my-3 input-signup'
                         type='text'
                         name='username'
                         placeholder='Enter your username'
                         onChange={change}
                         value={Inputs.username}
                        />
                        <input
                         className='p-2 my-3 input-signup'
                         type='password'
                         name='password'
                         placeholder='Enter your password'
                         onChange={change}
                         value={Inputs.password}
                        />
                        <button className='d-flex btn-signup p-2' onClick={submit}>
                            Sign up
                        </button>
                    </div>
                </div>
                <div className='container-signup col-lg-4 d-lg-flex justify-content-center align-items-center d-none'>
                    <h1 className='text-center signup-heading'>
                        Sign <br /> Up 
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Signup;