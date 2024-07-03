import React, { useState } from 'react'
import './firebase-auth.css'
import UnauthPage from './unauth-page'
import AuthPage from './auth-page'

function  FirebaseAuth() {
    
  return (
    <div>
      <h1> Firebase Auth </h1>
      <UnauthPage />
      <AuthPage />
    </div>
  )
}

export default  FirebaseAuth
