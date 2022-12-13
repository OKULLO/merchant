import React,{ useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


import { LOGIN_PAGE } from '../constants/history.constants'

export default function PrivateRoute({ children }) {
  
  
  const user = useSelector((state) => state?.auth?.user)
 

  return user ? children: <Navigate to={{ pathname: LOGIN_PAGE}}/>;

}

