import React from 'react'
import Header from './Header'
import './home.css'
import HomeImage from './homeImage.jpg'
function Home({token,set}) {
  return( 
    <>
    <Header token={token} set={set}/>
    <div className='HomeContainer container'>
      <div className='setn1 ' style={{paddingTop:"100px"}}>
          <h1>Welcom To Cliffex admin portal</h1>
          <h2>Crafting Web and Mobile applications with passion.</h2>
          <p>development studio. We specialise in crafting modern mobile and web applications for businesses of tomorrow.</p>
      </div>
      <section className='setn1' >
        <img src={HomeImage} width="100%" height="100px"/>
      </section>
    </div>
    </>
)
}

export default Home
