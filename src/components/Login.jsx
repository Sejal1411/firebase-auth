import {  Button, TextField } from '@mui/material';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, signInWithGoogle } from '../Firebase';
import { Link, useNavigate } from 'react-router-dom';
import logo from "/side-img.jpg";
import logo2 from "/search.png";


const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmit = () => {
    if( !values.email || !values.pass) {
      setErrorMsg("Please fill all the fields*");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
    .then(async(res) => {
      setSubmitButtonDisabled(false);
      navigate("/")
      // console.log(user);
    })
    .catch((err) => {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
      console.log("Error-", err.message)
     });

    }

  return (
       
  <div className='log-in'>
    <div className='image-con'>
      <img src={logo} alt="LOGO" />
    </div>

    <div className='log-in-box'>
    <p> User Login </p>

    <TextField 
     id="outlined-basic"
     color="success" 
     label='Email'
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
     onChange={(e) => setValues((prev) => ({ ...prev, pass: e.target.value }))
     }
     fullWidth
    />
    
    <b style={{ color: 'red', fontSize: '14px' }}>{errorMsg}</b>

    <Button 
     variant="contained" 
     fullWidth
     onClick={handleSubmit}
     disabled = {submitButtonDisabled}
    > 
     Login
    </Button>

    <p className='text'>Not Registered? Create an account{" "}
      <span>
        <Link to="/app/signup">Signup</Link>
      </span>
    </p>

    <p style={{color: 'black', fontSize: '14px'}}>OR</p>

    <Button 
     className='button1'
     variant="outlined" 
     onClick={signInWithGoogle}
    >
     <img src={logo2}  alt="LOGO" />
     <p className='text1' styles={{paddingRight: 16}}>Sigin with Google</p>
    </Button>
    

    </div>
  </div>
  )
}

export default Login
