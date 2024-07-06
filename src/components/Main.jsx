import Signup from './Signup'
import Login from './Login'
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      {/* <Login /> */}
      <Outlet />
      <Signup />


    </main>
  );
};

export default Main
