import React from 'react'
import Layout from '../components/layout/Layout'
const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Discover beauty in its purest form at our Cosmetics Shop. Explore a curated range of premium skincare, makeup, and fragrances, each selected for unrivaled quality. Our attentive staff is dedicated to helping you find the perfect products to enhance your unique style. Elevate your self-expression and sophistication with us, where every item embodies excellence and authenticity.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;