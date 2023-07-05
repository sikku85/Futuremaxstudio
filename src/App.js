import React,{useContext} from 'react';
import { Route,Routes } from 'react-router-dom';
import AppContext from './Context/AppContext';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Portfolio } from './Components/Portfolio';
import { Admin } from './Components/Admin';
function App() {
  const {centralizedData,updateCentralizedData}=useContext(AppContext);
  return (
    <div>
      {/* <Navbar></Navbar> */}

    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
      <Route path='/adminsection' element={<Admin></Admin>}></Route>




    </Routes>
     

    </div>
  );
}

export default App;
