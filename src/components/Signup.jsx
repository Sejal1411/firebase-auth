import {  Button, TextField } from '@mui/material'
import logo from "/side-img.jpg";
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if(!values.name || !values.email || !values.pass) {
      setErrorMsg("Please fill all the fields*");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
    .then(async(res) => {
      setSubmitButtonDisabled(false);
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      }); 
      navigate("/");
      // console.log(user);
    })
    .catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
      console.log("Error-", err.message)
});
      
  };

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
    //  value={name}
     onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))
    }
     fullWidth
     />
    <TextField 
     id="outlined-basic"
     color="success" 
     label='Enter Email'
    //  value={email}
     onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))
    }
     fullWidth
    />
    <TextField
     id="outlined-basic"
     color="success" 
     type="password"
     autoComplete="current-password"
     label='Enter Password'
    //  value={password}
     onChange={(e) => setValues((prev) => ({ ...prev, pass: e.target.value }))
    }
     fullWidth
     />
    
    <b style={{ color: 'red', fontSize: '14px' }}>{errorMsg}</b>
    
    <Button 
     className='button'
     variant="contained" 
     fullWidth
     onClick={handleSubmit}
     disabled = {submitButtonDisabled}
    >
      Sign Up
    </Button>
    <p className='text'>Already have an account?{" "}
       <span>
        <Link to="/app/login">Login</Link>
       </span>
    </p>
  </div>
</div>
  )
}

export default Signup;
