import Signup from './components/Signup'
import Login from './components/Login'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="app" element={<Main />}>
       <Route path="signup" element={<Signup />}></Route>
       <Route path="login" element={<Login />}></Route>
      </Route>
      {/* <Signup /> */}
    </Routes>
  )
}

export default App
