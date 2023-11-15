import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'
// import {toast} from 'react-toastify';
import '../../styles/AuthStyle.css';
import {toast} from "react-hot-toast";
import  axios from 'axios';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [phone,setPhone] =useState("");
    const [address,setAddress] =useState("");
    const [answer,setAnswer] =useState("");
    const Navigate =useNavigate();

    //Form SUbmit state
    const handleSubmit = async(e) =>{
         e.preventDefault();
        // console.log(name,email,password,address,phone);
        // toast.success('Registered Successfully');
        try {
            // console.log("hlloo exe");
            const res=await axios.post('/api/v1/auth/register',{name,email,password,phone,address,answer});
            // console.log(res.data.success);
         //   toast.success("Loading..");
          if(res && res.data.success)
          {
            toast.success(res.data.message,{ duration: 5000 });
            // alert("You have Registered Successfully");
            Navigate('/login');
          }
          else{
            toast.error(res.data.message);
        
        
          }
       
       
        } catch (error) {
            
            console.log(error);
            toast.error("Something Went Wrong");
        }

    }
    
  return (<Layout title={"Register-SOS Application" }>
    <div className="form-container"  >
       
            <form onSubmit={handleSubmit}>

            <h1 className="title">Register Page </h1>
        <div className="mb-3">
            <input type="text"  value={name}
            className="form-control"  required
            onChange={(e) => setName(e.target.value)}
             placeholder='Enter Your Name' />
        </div>
        <div className="mb-3">
            <input type="email"     required            onChange={(e) => setEmail(e.target.value)}
               value={email} className="form-control"   placeholder='Enter Your Email'  />
        </div>
        <div className="mb-3">
            <input type="password"       required         onChange={(e) => setPassword(e.target.value)}
                    value={password}   className="form-control"   placeholder='Enter Your Password' />
        </div>
        <div className="mb-3">
            <input type="text"     value={phone}        required        onChange={(e) => setPhone(e.target.value)}
  className="form-control"   placeholder='Enter Your Mobile Number' />
        </div>
        <div className="mb-3">
            <input type="text"   value={address}         required      onChange={(e) => setAddress(e.target.value)}
   className="form-control"   placeholder='Enter Your Delivery Address'/>
        </div>
        <div className="mb-3">
            <input type="text"   value={answer}         required      onChange={(e) => setAnswer(e.target.value)}
   className="form-control"   placeholder='Security Answer if u forget Password '/>
        </div>
       


        <button type="submit" className="btn btn-primary">Register</button>
        </form>

    </div>
   </Layout>
  );
};

export default Register
