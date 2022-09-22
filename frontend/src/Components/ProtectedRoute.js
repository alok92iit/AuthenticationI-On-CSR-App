import React, { useState,useEffect } from 'react'
import Home from "./Home"
import axios from 'axios'
import { useNavigate, Outlet } from 'react-router-dom'
const ProtectedRoute = ({token,set}) => {
  async  function checkValidUser(){
    return axios({
          
        // Endpoint to send files
        url: "http://localhost:8000/isLoggedIn",
        method: "GET",
        Credential:"Include",
        headers: {
    
          // Add any auth token here
          
          Accept:"application/json",
          "Content-Type":"application/json",
          "Acess-Control-Allow-Credentials":true
          // authorization: "your token comes here",
        },
    
        // Attaching the form data
        withCredentials:true,
       }).then((response) => {
        // set(response.data)
        return(response.data.data)
        })
        // Catch errors if any
        .catch((err) => { throw (null)})
        // .then((res)=>{return(res)})
        // return(serverResponse)
    }
    useEffect(()=>{async function fetchData(){
  
      const check=await checkValidUser()
      // console.log(check)
      set(check)
      }
      fetchData()
      
  },[])
  const navigate = useNavigate();

  //  const myToken =token
  console.log("token=",token);
    return (<>
          {token?<Outlet/>:<Home/>}
          </>
  )
}


export default ProtectedRoute