import React from 'react'
import DSONE from "/DSONE.webp";
import DSTWO from "/DS.TWO.webp";
import DSTHREE from "/DSTHREE.webp";
import DSFOUR from "/DSFOUR.webp";
import DSFIVE from "/DSFIVE.webp";
import DSSIX from "/DSSIX.jpg"
import DSEIGHT from "/DSEIGHT.webp"
import DSFINAL from "/DSFINAL.png";
import Python from "/python.png";
import Head from '../Head';
import {Link} from "react-router-dom";

const DS = () => {
  let TwoData = [
  {img:DSONE ,Topics:"Extraordinary Data Science Projects for Beginners As Well as Veterans" , Content:"Does data scientists fascinate you? If yes, you must definitely know about data science frameworks."},
  {img:DSTWO ,Topics:"Extraordinary Data Science Projects for Beginners As Well as Veterans" , Content:"Does data scientists fascinate you? If yes, you must definitely know about data science frameworks."},
  {img:DSTHREE ,Topics:"10 Best Data Science Online Courses for Beginners | 2023" , Content:"Does data scientists fascinate you? If yes, you must definitely know about data science frameworks."},
  {img:DSFOUR ,Topics:"10 Best Data Science Online Courses for Beginners | 2023" , Content:"Does data scientists fascinate you? If yes, you must definitely know about data science frameworks."},
  {img:DSFIVE,Topics:"10 Best Data Science Frameworks in 2023" , Content:"Does data scientists fascinate you? If yes, you must definitely know about data science frameworks."},
  {img:DSSIX ,Topics:"7 Must-Watch Data Science Focused YouTube Channels for Effective Learning" , Content:"‍Data science has become one of the most sought-after skills in the current job market."},
  {img:DSEIGHT ,Topics:"Everything about Data Scientist Salary in India | 2023" , Content:"Are you curious about the highly sought-after field of data science and the potential it"},
  {img:DSFINAL ,Topics:"How Long Would It Take to Learn Data Science?" , Content:"Have you ever wondered how much time it takes to learn data science? It’s an"},
  {img:Python ,Topics:"PyTorch vs TensorFlow | 10 Powerful Differences You Must Know!", Content:"Your pocketbook on Pytorch Vs TensorFlow From personalized shopping and entertainment experiences to face recognitions,"}
]
  return (
    <>
    <Head />
     <div className="container">
        <div className="row">
            <div className="col-sm-12 mt-4">
                <h1 className='display-6 ms-1 p-2  fw-bold text-secondary'>Data Science</h1>
                <p className='ms-2 text-secondary w-75'>One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.</p>
                <p className='text-secondary ms-2 w-75'>The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
            </div>
        </div>
     </div>
     <hr />
     <div className="container">
        <div className="row ">
            <div className="col-sm-12">
            <div className="d-flex justify-content-evenly mt-1 mb-1 ">
            <Link className='btn fw-bold text-secondary' to="/fullstackDevelopment">Full Stack Development</Link>
            <Link className='btn fw-bold text-secondary' to="/DataScience">Data Science</Link>
            <Link className='btn fw-bold text-secondary' to="/CyberSecurity">Cyber Security</Link>
            <Link className='btn fw-bold text-secondary' to="/Courses">Courses</Link>
            </div>
            </div>
        </div>
    </div>
     <div className="container">
        <div className="row">
            {TwoData.map((e,i) => ( 
            <div className="col-sm-4" key={i}>
              <div className="cart p-3">
                  <img src={e.img} alt="" style={{height:"200px"}} className="img img-fluid"  />
                  <h5 className='mt-3'>{e.Topics}</h5>
                  <p>{e.Content}</p>
              </div>
            </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default DS