import {React,useEffect} from 'react'
import axios from 'axios'
import '../Components/Header.css'
import SignUP from "./SignUP"
import Login  from "./Login"
import {useNavigate,Link } from 'react-router-dom'
// import { useEffect } from 'react'

function Header({token,set}) {


  const navigate =useNavigate();
  const logoutHandler =async()=>{
    const response =await axios({
        
      // Endpoint to send files
      url: "http://localhost:8000/logout",
      method: "POST",
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
      set(null)
      navigate("/")
      })
      // Catch errors if any
      .catch((err) => { throw (null)})
      console.log(response)
  }
  return (<>
  <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#219ebc",color:"white"}}>
    <h2 style={{margin:"12px 25px"}}>Cliffex</h2>
    <ul style={{
      listStyle:"none",
      display:"flex",
      justifyContent:"flex-end",
      gap:"30px",
      padding:"10px"
      }}>    
        <Link to='/' style={{color:"white",textDecoration:"none"}}>Home</Link>
        {
          token
          ?
          <>
            <li><Link to='/members' style={{color:"white",textDecoration:"none"}}>Team</Link></li>
            <li onClick={logoutHandler}>Logout</li>
          </>
          :
          <><SignUP /><Login /></>
        }

      
    </ul>
    </div>
    </>
  )
}
export default Header
