import React from 'react'
import db,{auth, googleProvider } from '../firebase'
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

function LoginPage({setUser}) {
  const navigate=useNavigate()

  const signInWithGoogle=() =>{
    auth.signInWithPopup(googleProvider)
    .then((result) =>{
      const newUser={
        fullname: result.user.displayName,
        email:result.user.email,
        photoURL:result.user.photoURL
      }
      navigate('/')
      setUser(newUser)
      localStorage.setItem("user",JSON.stringify(newUser));

      db.collection('users').doc(result.user.email).set(newUser);

    })
    .catch((err) =>alert(err.message));
  };
  return (
    <div className='login-container'>
      <p className='login-name'>login here</p>
      <button className='login-btn' onClick={signInWithGoogle}>
        <img src="./google-logo.png" alt=""/>Login with google
      </button>
    </div>
  )
}

export default LoginPage
