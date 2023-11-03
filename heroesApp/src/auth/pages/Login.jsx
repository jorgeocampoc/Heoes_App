import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext';

export const Login = () => {
    const {user, setUser} = useContext( UserContext );
    const navigate = useNavigate();
    
    const onLogin = () =>{
        
        if( user.trim() === '' ){
            return;
        }
        navigate( '/',{
            replace:true
        } );
    }
  return (
    <>
    <h1 className='container text-center mt-5 mb-3  '>
        Login
    </h1 >
    <hr className='w-25 m-auto'/>
        <div className='text-center mt-3 '>
        <input
      className="form-control me-2"
      type="search"
      placeholder="Buscar personaje"
      aria-label="Search"
      onChange={ e => { setUser(e.target.value) } }
    />
        <button 
        className='btn btn-primary m-auto'
        onClick={onLogin}
        >
        Ingresar
    </button>
        </div>
    </>
  )
}
