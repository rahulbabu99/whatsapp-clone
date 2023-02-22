import React from 'react'
import "./Userprofile.css";

function Userprofile({name,photoURL}) {
  return (
    <div className='user-profile'>
        <div className='user-image'>
            <img src={photoURL} alt=""/>
        </div>
        <div className='user-info'>
            <p className="user-info">{name}</p>
        </div>
    </div>
  )
}

export default Userprofile