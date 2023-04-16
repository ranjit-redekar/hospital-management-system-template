import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import { NavbarItems } from './common/constants';
import SideNav from './Layouts/SideNav/SideNav';
import Signin from './views/Signin';
import Signout from './views/Signout';

const App = () => {
  return (
    <Routes>
      <Route path='/signin'  element={<Signin />} />
      <Route path='/signout'  element={<Signout />} />
      <Route path="/*" element={<SideNav list={ NavbarItems } />}>
      </Route>
    </Routes>
  );
};

export default App;
