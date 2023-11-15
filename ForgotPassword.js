import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'
// import {toast} from 'react-toastify';
import '../../styles/AuthStyle.css';
import {toast} from "react-hot-toast";
import  axios from 'axios';
import {useNavigate,useLocation} from "react-router-dom";


export const ForgotPassword = () => {
    const [email,setEmail] =useState("");
    const [newpassword,setNewPassword] =useState("");
    const [answer,setAnswer] =useState("");
    const Navigate =useNavigate();

    //Form SUbmit state
    const handleSubmit = async(e) =>{
         e.preventDefault();
        // console.log(name,email,password,address,phone);
        // toast.success('Registered Successfully');
        try {
            // console.log("hlloo exe");
            const res=await axios.post('/api/v1/auth/forgot-password',{email,newpassword,answer});
            // console.log(res.data.success);
          if(res && res.data.success)
          {
            toast.success(res.data && res.data.message);
            // alert("You have Registered Successfully");
            Navigate( '/login');
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
   <Layout  title={"ForgotPassword-SOS Application"}>
    <>
    <div className="form-container"  >
       
            <form onSubmit={handleSubmit}>

            <h1 className="title"> Reset Password  </h1>
        <div className="mb-3">
            <input type="email"     required            onChange={(e) => setEmail(e.target.value)}
               value={email} className="form-control"   placeholder='Enter Your Email'  />
        </div>
        <div className="mb-3">
            <input type="password"       required         onChange={(e) => setNewPassword(e.target.value)}
                    value={newpassword}   className="form-control"   placeholder='Enter Your Password' />
        </div>
      
        <div className="mb-3">
            <input type="text"     required            onChange={(e) => setAnswer(e.target.value)}
               value={answer} className="form-control"   placeholder='Security Answer'  />
        </div>
    
        <button type="submit" className="btn btn-primary">Reset Password </button>
        </form>

    </div>
    </>
   </Layout>
  )
}
