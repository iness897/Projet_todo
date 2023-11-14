import React from "react";
import './navbar.scss'
import { LuListTodo } from "react-icons/lu"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authActions } from "../../store";
import { useDispatch } from "react-redux";


const Navbar = () => {


    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const dispatch = useDispatch();
    const logout = () =>{
        sessionStorage.clear("id")
        dispatch(authActions.logout())
    }

  return (
   <>
   
    <nav className="navbar navbar-expand-lg ">
    <div className="container">
        <Link className="navbar-brand" to="/">
            <b>
            <LuListTodo /> &nbsp; TODO APP
            </b>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
            <Link className="nav-link active" aria-current="page" to="/">
                Home
            </Link>
            </li>

            {!isLoggedIn && (
            <>
              <div className="d-flex">
                <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav p-2" aria-current="page" to="/signup">
                        SignUp
                    </Link>
                </li>
              </div>
              <div className="d-flex my-lg-0 my-2">
                <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav p-2" aria-current="page" to="/signin">
                        SignIn
                    </Link>
                 </li>
              </div>

            </>
            )
            }

            {isLoggedIn && (
                <>
             
                <li className="nav-item mx-2">
                    <Link className="nav-link active" aria-current="page" to="/todo">
                        Todo
                    </Link>
                </li>
                <div className="d-flex">
                    <li onClick={logout} className="nav-item mx-2">
                    <Link className="nav-link active btn-nav p-2" aria-current="page" to="/">
                        Log Out
                    </Link>
                    </li>
                </div>

                </>
            )
            }


        </ul>
        </div>
    </div>
    </nav>

   </>

  )
}



export default Navbar; 
