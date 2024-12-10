import React, { createContext, useEffect, useState } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
  const [isAuth,setIsAuth]=useState(false);
  const [loginPersonName,setLoginPersonName]=useState("")
  useEffect(()=>{
    const getCookie = (cookieName) => {
      const cookies = document.cookie.split("; "); // Split into individual cookies
      for (const cookie of cookies) {
        const [key, value] = cookie.split("="); // Split into key and value
        if (key === cookieName) {
          return decodeURIComponent(value); // Decode value to handle special characters
        }
      }
      return null; // Return null if not found
    };
    console.log(getCookie("access_Token"), "try to log cookies")  

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
