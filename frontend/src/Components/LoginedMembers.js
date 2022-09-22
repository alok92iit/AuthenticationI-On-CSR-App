// import React,useEffect} from 'react'
import Header from './Header'
import { useEffect } from 'react'
import axios from 'axios'
import "../Components/LoginMembers.css"
import MemberCard from './MemberCard'
const LoginedMembers = ({token,set}) => {
  console.log(token)
  let user=null
  const length=token.length-1
  const teamMembers =token.map((member,index)=>{
    if(index<length){
      console.log("idex=",index," length=",token.length)
    return <MemberCard key={member.username} member={member}/>
    }
    else if(index==length){
       user=member
    }
  })
  return (
    <>
    <Header token={token} set={set}/>
    <div>
        <h1 className='heading'>Hii {user} here is your team</h1>
        <div className='cardContainer'>
              {
                teamMembers
              }
        </div>
    </div>
    </>
  )
}

export default LoginedMembers