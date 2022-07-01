import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Auth.css'
import { signUp,login } from '../../actions/auth'
import icon from '../../assets/favicon.ico'
import AboutAuth from './AboutAuth'

const Auth = () => {

    const [isSignup, setIsSignup]= useState(false)
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const handleSwitch = () =>{
        setIsSignup(!isSignup)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!email && !password){
            alert('Enter email and password')
        }
        if(isSignup){
            if(!name){
                alert("Enter a name to continue")
            }
            dispatch(signUp({name,email,password}, navigate))
        }else{
            dispatch(login({email, password}, navigate))
        }
       
    }



  return (
    <section class='auth-section'>
        {
           isSignup && <AboutAuth/>
        }
        <div class='auth-container-2'>
            {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' />} 
            <form onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <label htmlFor="name">
                            <h4>Display Name</h4>
                            <input type="text" id='name' name='name' onChange={(e) =>(setName(e.target.value))}/>
                        </label>
                    )
                }
                <label htmlFor="email">
                    <h4>Email</h4>
                    <input type="email" name='name' id='email' onChange={(e) =>(setEmail(e.target.value))}/>
                </label>
                <label htmlFor="password">
                    <div style={{ display:"flex", justifyContent:"space-between"}}>
                    <h4>Password</h4>
                    {!isSignup && <p style={{ color: "#007ac6" , fontSize:"13px"}}>forgot password</p>}
                    </div>
                    <input type="password" name='password' id='password' onChange={(e) =>(setPassword(e.target.value))}/>
                    { isSignup && <p style={{ color: "#666767", fontSize:"13px"}}>Passwords must contain at least eight characters, including at least 
                        1 letter and 1 number.</p>}
                </label>
                {
                    isSignup && (
                        <label htmlFor='check'>
                            <input type="checkbox" id='check' /><p style={{  fontSize:"13px" , display:"inline-block" }}>Opt-in to receive occasional product <br/> updates, user research invitations, company 
                            <br/> announcements, and digests.</p>
                        </label>
                    )
                }
                <button type='submit' className='auth-btn' >{ isSignup ? 'Sign up': 'Log in'}</button>           
                {
                    isSignup&&(
                        <p style={{ color: "#666767", fontSize:"13px"}}>
                            By clicking “Sign up”, you agree to our
                             <span style={{ color: "#007ac6"}}>terms of service</span>,
                             <span style={{ color: "#007ac6"}}>privacy policy</span> and 
                             <span style={{ color: "#007ac6"}}> cookie policy</span>
                        </p>
                    )
                }
            </form>
            <p>
                {isSignup ? 'Already have an account':"Don't have an account?"}
                <button type='button' className='handle-switch-btn' onClick={handleSwitch} >{ isSignup ? "Log in ": " Sign up"}</button>
            </p>
        </div>
    </section>
  )
}

export default Auth