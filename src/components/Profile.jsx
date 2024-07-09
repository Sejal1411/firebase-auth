import { Button } from "@mui/material";


const Profile = () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const profilePic = localStorage.getItem('profilePic');

  return (
    <div className="profile">
    <div>
        {profilePic && 
        <img 
           className="img"
           src={profilePic} 
           alt="Profile"  
           width={"40%"}
           style={{borderRadius: "50%"}}
        />
        }
        <h1>Welcome {name}</h1>
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
    </div>

    <div>
    <Button 
     variant="contained" 
     fullWidth
    //  onClick={handleSubmit}
    //  disabled = {submitButtonDisabled}
    > 
     Log Out
    </Button>
    </div>
      
    </div>
  )
}

export default Profile
