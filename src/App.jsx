import Signup from './components/Signup'
import Login from './components/Login'
import Main from './components/Main'
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path="app" element={<Main />}>
       <Route path="login" element={<Login />}></Route>
      </Route>
      {/* <Signup /> */}
    </Routes>
  )
}

export default App
