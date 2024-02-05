import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
  const [isAuth,setIsAuth]=useState(false);
  const [loginPersonName,setLoginPersonName]=useState("")
  return (
    <div>
      <AuthContext.Provider value={{isAuth,setIsAuth,loginPersonName,setLoginPersonName}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
