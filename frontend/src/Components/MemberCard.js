import React from 'react'
import "../Components/card.css"
import manUser from "../Components/manUser.svg"
import woman from "../Components/woman.svg"
const MemberCard = ({member}) => {
  return (
    <div className='card'>
        <div>
            <img src={member.gender=="Male"?manUser:woman} width="90" height="90"/>
        </div>
        <div className='cardText'>
            <p>{member.username}</p>
            <p>{member.email}</p>
        </div>
    </div>
  )
}

export default MemberCard