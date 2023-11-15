import React from 'react'
import Layout from '../components/layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          Please feel welcome to reach out for any inquiries or information regarding our products at any time our lines are open 24/7 for your convenience.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.shreeonlineshopping@gmail.com 
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 7997466206
          </p>
          <p className="mt-3">
            <BiSupport /> :  123234566
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;