import React from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
function App() {
  return (
    <>
    <Routes>
      <Route  path="/"  element={<HomePage/>} />
     
              <Route path="/dashboard" element={<PrivateRoute/>} >
                       <Route  path=""  element={<Dashboard/>} />
              </Route>
             
              <Route  path="/register"  element={<Register/>} />
      <Route  path="/login"  element={<Login/>} />

      <Route  path="/forgot-password"  element={<ForgotPassword/>} />
      <Route  path="/about"  element={<About/>} />
      <Route  path="/contact"  element={<Contact/>} />
      <Route  path="/policies"  element={<Policies/>} />
      <Route  path="*"  element={<PageNotFound/>} />

    </Routes>

    </>
  );
}

export default App;
