import {  Button, TextField } from '@mui/material'
import logo from "/public/side-img.jpg";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Signup = () => {
  return (
    
<div className='sign-up'>
    <div className='image-con'>
      <img src={logo} alt="LOGO" />
    </div>

    <div className='sign-up-box'>
    <p>Sign Up !</p>
    <TextField 
     label="Filled success" 
     color="success" 
     focused
     placeholder='Enter Name'
     InputProps={{
      startAdornment: <AccountCircleIcon />,
      className: 'icons',
    }}
    />
    <TextField 
     label="Filled success" 
     color="success" 
     focused
     placeholder='Enter Email'
     InputProps={{
      startAdornment: <EmailIcon />,
      className: 'icons',
    }}
    />
    <TextField
     label="Filled success" 
     color="success" 
     focused
     placeholder='Enter Password'
     InputProps={{
      startAdornment: <LockIcon />,
      className: 'icons',
    }}
    />
    <TextField
    label="Filled success" 
    color="success" 
    focused
     placeholder='Retype Password'
     InputProps={{
      startAdornment: <LockIcon />,
      className: 'icons',
    }}
    />
     <Button variant="contained" fullWidth>Sign Up</Button>
    </div>
</div>
  )
}

export default Signup;
