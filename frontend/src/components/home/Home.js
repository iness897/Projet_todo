import React from 'react';
import './home.scss';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = () => {

  const isLoggedIn = useSelector((state) => state.isLoggedIn)



  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className='container d-flex justify-content-center align-content-center flex-column align-items-center'>

            <h1 className='text-center'>Organize your<br/> work and mom life, finally.</h1>
            <p>Become focused, organized and calm with<br />Todo App, the task manager app.<br />
            </p>

            {!isLoggedIn && (
              <button className='home-btn p-2'>
                <Link className='link' to="/signup">
                  Make my Todo List
                </Link>
              </button>
            )
            }

            {isLoggedIn && (
              <button className='home-btn p-2'>
                <Link className='link' to="/todo">
                  Make my Todo List
                </Link>
             </button>
            )
            }



        </div>
    </div>
  )
}


export default Home;