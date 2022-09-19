import React, { useEffect } from 'react'
import axios from 'axios'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoute = () => {
    useEffect(()=>{
        axios({
          
            // Endpoint to send files
            url: "http://localhost:8000/login",
            method: "POST",
            // headers: {
        
            //   // Add any auth token here
            //   authorization: "your token comes here",
            // },
        
            // Attaching the form data
            data: {},
          })
        
            // Handle the response from backend here
            .then((res) => { console.log(res) })
            // Catch errors if any
            .catch((err) => {console.log(err) });
        
      },[])
  let auth={"token":false}
    return (<></>
    // auth.token?<Outlet/>:<Navigate to ='/Home'/>
  )
}


export default ProtectedRoute