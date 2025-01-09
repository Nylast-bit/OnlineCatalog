"use Client"

import React from 'react'
import '../globals.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const Login = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Registrate</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <UserIcon className='h-5'/>
          <input type="text" />
        </div>
        <div className="input">
          <EnvelopeIcon className='h-5'/>
          <input type="email" />
        </div>
        <div className="input">
          <LockClosedIcon className='h-5'/>
          <input type="password" />
        </div>
      </div>
    </div>
  )
}

export default Login
