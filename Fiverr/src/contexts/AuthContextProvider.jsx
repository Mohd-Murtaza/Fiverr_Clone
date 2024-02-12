import React, { createContext, useEffect, useState } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
  const [isAuth,setIsAuth]=useState(false);
  const [loginPersonName,setLoginPersonName]=useState("")
  useEffect(()=>{
    const loginPersonName=localStorage.getItem("loginPersonName");
    if(loginPersonName){
      setLoginPersonName(localStorage.getItem("loginPersonName"));
      setIsAuth(localStorage.getItem("isAuth"));
    }
  },[])
  return (
    <div>
      <AuthContext.Provider value={{isAuth,setIsAuth,loginPersonName,setLoginPersonName}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
