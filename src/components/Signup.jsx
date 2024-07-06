import {  Button, TextField } from '@mui/material'
import logo from "/side-img.jpg";
import { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const handleSubmit = () => {
  //    if(password != confirmPassword) {

  //    }
  // };

  return (
  <div className='sign-up'>
    <div className='image-con'>
      <img src={logo} alt="LOGO" />
    </div>

   <div className='sign-up-box'>
     <p>Signup !</p>
     <p className='text'>Please enter your details to create your account</p>

    <TextField 
     id="outlined-basic"
     color="success" 
     label='Enter Name'
     value={user}
     onChange={(e) => setUser(e.target.value)}
     fullWidth

    />
    <TextField 
     id="outlined-basic"
     color="success" 
     label='Enter Email'
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     fullWidth
    />
    <TextField
     id="outlined-basic"
     color="success" 
     type="password"
     autoComplete="current-password"
     label='Enter Password'
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     fullWidth
     
    />
    <TextField
     id="outlined-basic"
     color="success" 
     type="password"
     autoComplete="current-password"
     label='Retype Password'
     value={confirmPassword}
     onChange={(e) => setConfirmPassword(e.target.value)}
     fullWidth
    
    />
     <Button 
     variant="contained" 
     fullWidth
    //  onClick={handleSubmit}
     >
      Sign Up
      </Button>
    <p className='text'>Or Signup with</p>

    </div>
</div>
  )
}

export default Signup;
