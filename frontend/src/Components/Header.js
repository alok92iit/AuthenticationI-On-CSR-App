import React from 'react'
import '../Components/Header.css'
import SignUP from "./SignUP"
import Login  from "./Login"

function Header() {
  return (
    <div style={{
      // listStyle:"none",
      display:"flex",
      justifyContent:"flex-end",
      gap:"30px",
      margin:"20px"
      }}>
      <SignUP/>
      <Login/>
    </div>
  )
}
export default Header
