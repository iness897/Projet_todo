import React, { useState } from 'react'
import './signin.scss'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';


const Signin = () => {

    const dispatch = useDispatch();
    const history = useNavigate();

    const [Inputs, setInputs] = useState({
        email: "", 
        password: "",
    });

    const change = (e) =>{
        const {name, value} = e.target
        setInputs({...Inputs, [name]: value}); 
    };

    const submit = async(e) =>{
        e.preventDefault();
        await axios
        .post("http://localhost:3005/signin", Inputs)
        .then((response) =>{
            console.log(response.data.userId)
            sessionStorage.setItem("id", response.data.userId)
              dispatch(authActions.login())
            history("/todo")
        });
    };

  return (
    <div className='signup'>
        <div className='container'>
            <div className='row'>
            <div className='container-signup col-lg-4 d-none d-lg-flex justify-content-center align-items-center'>
                    <h1 className='text-center signup-heading'>
                        Sign <br /> In 
                    </h1>
                </div>
                <div className='container-signup col-lg-8 d-flex justify-content-center align-items-center '>
                    <div className='d-flex flex-column w-100 p-3'>
                        <input
                         className='p-2 my-3 input-signup'
                         type='email'
                         name='email'
                         placeholder='Enter your mail'
                         value={Inputs.email}
                         onChange={change}
                        />
                        <input
                         className='p-2 my-3 input-signup'
                         type='password'
                         name='password'
                         placeholder='Enter your password'
                         value={Inputs.password}
                         onChange={change}
                        />
                        <button className='d-flex btn-signup p-2' onClick={submit}>
                            Sign In
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}


export default Signin;