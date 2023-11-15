import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'
// import {toast} from 'react-toastify';
import '../../styles/AuthStyle.css';
import {toast} from "react-hot-toast";
import  axios from 'axios';
import {useNavigate,useLocation} from "react-router-dom";
import { useAuth } from '../../context/auth';

const Login = () => {

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const  [auth,setAuth]=useAuth()
    const Navigate =useNavigate();
    const location=useLocation(); 

    //Form SUbmit state
    const handleSubmit = async(e) =>{
         e.preventDefault();
        // console.log(name,email,password,address,phone);
        // toast.success('Registered Successfully');
        try {
            // console.log("hlloo exe");
            const res=await axios.post('/api/v1/auth/login',{email,password});
            // console.log(res.data.success);
          if(res && res.data.success)
          {
            toast.success(res.data && res.data.message);
            // alert("You have Registered Successfully");
            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token,
            });
            localStorage.setItem('auth',JSON.stringify(res.data));
            Navigate(location.state || '/');
          }
          else{
            toast.error(res.data.message);
        
        
          }
       
       
        } catch (error) {
            
            console.log(error);
            toast.error("Something Went Wrong");
        }

    }
    
  return (
   <Layout title={"Register-SOS Application" }>
    <div className="form-container"  >
       
            <form onSubmit={handleSubmit}>

            <h1 className="title">LOGIN  </h1>
        <div className="mb-3">
            <input type="email"     required            onChange={(e) => setEmail(e.target.value)}
               value={email} className="form-control"   placeholder='Enter Your Email'  />
        </div>
        <div className="mb-3">
            <input type="password"       required         onChange={(e) => setPassword(e.target.value)}
                    value={password}   className="form-control"   placeholder='Enter Your Password' />
        </div>
        <div className='mb-3'>
        <button type="button" className="btn btn-primary" onClick={()=>{Navigate('/forgot-password')}}>Forgot Password </button>

        </div>
    
        <button type="submit" className="btn btn-primary">Login </button>
        </form>

    </div>
   </Layout>
  )
}

export default Login
