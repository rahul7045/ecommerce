import React ,{  useContext , useState } from "react";

const AuthContext = React.createContext({
    token : "",
    isLoggedIn : false,
    login : (token)=>{},
    logout : ()=>{}
})

export const AuthContextProvider=(props)=>{
    const initialToken = localStorage.getItem('token');
    const[token , setToken] = useState(initialToken);
    const userLoggedIn = !!token;


    const loginHandler=(token)=>{
        setToken(token)
        localStorage.setItem('token' , token)
    }

    const logoutHandler=()=>{
        setToken("");
        localStorage.removeItem('token')
    }

    const contextValue ={
        token : token,
        login : loginHandler,
        logout : logoutHandler,
        isLoggedIn : userLoggedIn 

    }
  return (
    <AuthContext.Provider value={contextValue}>{props.chldren}</AuthContext.Provider>
  )
}

export default AuthContext