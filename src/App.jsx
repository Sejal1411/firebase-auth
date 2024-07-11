import Signup from './components/Signup'
import Login from './components/Login'
import Main from './components/Main'
import Profile from './components/Profile'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import { useEffect, useState } from 'react';
import { auth } from './Firebase';
import  Appbar from './components/Appbar';


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <Router>
    <Appbar />
      <Routes>
      <Route path="/" element={<Home name={userName}/>}/>
       <Route path="app" element={<Main />}>
       <Route path="signup" element={<Signup />}></Route>
       <Route path="login" element={<Login />}></Route>
       <Route path="profile" element={<Profile />}></Route>

      </Route>
      {/* <Signup /> */}
      </Routes>
  </Router>
    
  )
}

export default App
