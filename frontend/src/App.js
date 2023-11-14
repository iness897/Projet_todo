import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar  from './components/navbar/Navbar'
import Home from './components/home/Home';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from './components/footer/Footer';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import CreateTodo from './components/todo/CreateTodo';
import React, {useEffect} from 'react';
import { authActions } from './store';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() =>{
    console.log(sessionStorage.getItem("id"));
    const id = sessionStorage.getItem("id")
    if(id){
      dispatch(authActions.login())
    }
   } , []);

  return (
  <>
      <Toaster 
      containerClassName="toaster"
        toastOptions={{
        
            success: {
              duration: 2000,
              style: {
                color: 'green',
              },
            },
            error: {
              duration: 1000,
              style: {
                color: 'red',
              },
            },
        }}
      />



      <div>
         <Router>
             <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/todo" element={<CreateTodo />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/signin" element={<Signin />} />
            </Routes>
         </Router>

         <Footer />

      </div>
 
      </>
  );
}

export default App;
