import { Button } from "@mui/material";
import { auth } from "../Firebase";
import {  useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate();

  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const profilePic = localStorage.getItem('profilePic');

  async function handleLogout() {
    try {
      await auth.signOut();
      localStorage.removeItem("user");
      navigate("/app/login");
      toast.success("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="profile">
    <div>
        {profilePic && 
        <img 
           className="img"
           src={profilePic} 
           alt="Profile"  
           width={"40%"}
           style={{borderRadius: "50%", marginLeft: "80px", marginBottom: "20px"}}
        />
        }
        <h1 style={{fontSize: "25px", fontFamily: "sans-serif", textAlign: "center", fontWeight: "bolder", marginBottom: "20px"}}>
            Welcome {name} !!
        </h1>
        <h1 style={{fontFamily: "sans-serif", color: "gray", fontSize: "17px"}}>
            Name: {name}
        </h1>
        <h1 style={{fontFamily: "sans-serif", color: "gray", fontSize: "17px"}}>
            Email: {email}
        </h1>
    </div>

    <div>
    <Button 
     variant="contained" 
     fullWidth
     onClick={handleLogout}
    //  disabled = {submitButtonDisabled}
    > 
     Log Out
    </Button>
    </div>
      
    </div>
  )
}

export default Profile
