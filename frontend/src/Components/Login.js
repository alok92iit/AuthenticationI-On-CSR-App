import React, { useRef, useState } from 'react'
import '../Components/Header.css'
import axios from 'axios'
import { Button,Input, Modal ,Checkbox,Select,Form} from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const Login = (state, action) => {
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
    let password='';
    function ModalExampleDimmer() {
      const nameRef =useRef();
      const passwordRef =useRef();
      const navigate =useNavigate();
      const [state, dispatch] = React.useReducer(Login, {
        open: false,
        dimmer: undefined,
      })
    //   const [isNewUser,setUser] =useState(true)
      const [nameValid,setValidName] =useState(true)
      const [passwordValid,setValidPassword] =useState(true)
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
        if(password==''){
            setValidPassword(false)
            return
        }
        console.log("name",name)
        console.log("password",password)
        // if(passwordRef.current.value!='' || passwordRef.current.value!=null)
        console.log("name is= ",passwordRef.current.value)
        console.log("Form is submited")
        axios({
      
            // Endpoint to send files
            url: "http://localhost:8000/login",
            method: "POST",
            // headers: {
        
            //   // Add any auth token here
            //   authorization: "your token comes here",
            // },
        
            // Attaching the form data
            data: {username:name,password},withCredentials: true, // Now this is was the missing piece in the client side 
          
          })
        
            // Handle the response from backend here
            .then((res) => {
              navigate("/members")
             })
        
            // Catch errors if any
            .catch((err) => {console.log(err) });
        
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
            Login
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
                <label >Password</label>
                <input type="password" style={{borderBottom:`${!passwordValid?'2px solid red':'2px solid skyblue'}`}} onChange={passwordHandler} ref={passwordRef}/>
                </div>
            
                
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