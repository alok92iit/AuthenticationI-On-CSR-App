import React, { useRef, useState } from 'react'
import '../Components/Header.css'
import axios from 'axios'
import { Button,Input, Modal ,Checkbox,Select,Form} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
const SignUP = (state, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
          return { open: true, dimmer: action.dimmer }
        case 'CLOSE_MODAL':
          return { open: false }
        default:
          throw new Error()
      }
    }
    let name =''
    let email='';
    let gender=''
    let password='';
    function ModalExampleDimmer() {
      const nameRef =useRef();
      const emailRef=useRef();
      const genderRef=useRef();
      const passwordRef =useRef();
    
      const [state, dispatch] = React.useReducer(SignUP, {
        open: false,
        dimmer: undefined,
      })
    //   const [isNewUser,setUser] =useState(true)
      const [nameValid,setValidName] =useState(true)
      const [emailValid,setValidEmail] =useState(true)
      const [genderValid,setValidGender] =useState(true)
      const [passwordValid,setValidPassword] =useState(true)
      const [checkUsername,validOrNot] =useState(true)
      const navigate =useNavigate();
      const { open, dimmer } = state
      const nameHandler=()=>{
         name = nameRef.current.value;
         if(name!=''){
            setValidName(true)
         }
            // const email =emailRef.current.value
        // const gender =genderRef.current.value
        // const password= passwordRef.current.value
        // console.log("name",name)
        // console.log("email",email)
        // console.log("gender",gender)
        console.log("name",name)
      }
      const emailHandler=()=>{
         email=emailRef.current.value
         if(email!=''){
            setValidEmail(true)
         }
        console.log("email",email)
      }
      const genderHandler =()=>{
         gender=genderRef.current.value
         if(gender!=''){
            setValidGender(true)
         }
        console.log("gender",gender)
      }
      const passwordHandler =()=>{
         password=passwordRef.current.value
         if(password!=''){
            setValidPassword(true)
         }
        console.log("password",password)
      }
      const submitHandler =async (e)=>{
        e.preventDefault()
        if(name==''){
            setValidName(false)
            console.log(name)
            return
        }
        if(email==''){
            setValidEmail(false)
            return
        }
        if(gender==''){
            setValidGender(false)
            return
        }
        if(password==''){
            setValidPassword(false)
            return
        }
        console.log("name",name)
        console.log("email",email)
        console.log("gender",gender)
        console.log("password",password)
        // if(passwordRef.current.value!='' || passwordRef.current.value!=null)
        console.log("name is= ",passwordRef.current.value)
        console.log("Form is submited")
        axios({
      
            // Endpoint to send files
            url: "http://localhost:8000/register",
            method: "POST",
            // headers: {
        
            //   // Add any auth token here
            //   authorization: "your token comes here",
            // },
        
            // Attaching the form data
            data: {name,email,gender,password},
          })
        
            // Handle the response from backend here
            .then((res) => { navigate("/")})
        
            // Catch errors if any
            .catch((err) => {validOrNot(false)});
        
      }
      return (
        <ul style={{
            listStyle:"none",
            // display:"flex",
            // justifyContent:"flex-end",
            // gap:"30px",
            // margin:"20px"
            }}>
          <li onClick={() => {dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}}>
            SignUP
          </li>

          <Modal
            dimmer={dimmer}
            open={open}
            onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
          >
            <Modal.Header>Sign Up</Modal.Header>
            <Modal.Content>
            <form>
                <div className='labelStyle'>
                <label  >Name</label>
                <input type="text" style={{borderBottom:`${!nameValid?'2px solid red':'2px solid skyblue'}`}} onChange={nameHandler} ref={nameRef} />
                </div>
                <div className='labelStyle'>
                <label >Email Address</label>
                <input type="email" style={{borderBottom:`${!emailValid?'2px solid red':'2px solid skyblue'}`}} onChange={emailHandler} ref={emailRef}/>
                </div>
                <div className='labelStyle'>
                <label >Gender</label>
                    <select  onChange={genderHandler} style={{borderBottom:`${!genderValid?'2px solid red':'2px solid skyblue'}`}} ref={genderRef}>
                        <option value="Gender"></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className='labelStyle'>
                <label >Password</label>
                <input type="password" style={{borderBottom:`${!passwordValid?'2px solid red':'2px solid skyblue'}`}} onChange={passwordHandler} ref={passwordRef}/>
                </div>
                <center>
                    <p style={{color:"red"}}>{checkUsername?'':"Username is already exist!"}</p>
                </center>
            </form>
            </Modal.Content>
            <Modal.Actions>
            <Button type='submit' onClick={submitHandler}>Submit</Button>
            </Modal.Actions>
          </Modal>
        </ul>
      )
    }
    

export default ModalExampleDimmer