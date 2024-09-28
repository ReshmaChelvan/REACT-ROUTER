import React from 'react'
import CYONE from "/CYONE.png";
import CYTWO from "/CYTWO.gif";
import CYTHREE from "/CYTHREE.webp";
import Four from "/CYFOUR.webp"
import csFive from "/CYFIVE.webp"
import CYSIX from "/CYSIX.jpg";
import CYSEVEN from "/CYSEVEN.png";
import CYEight from "/CYEight.webp";
import CsFinal from "/CYFINAL.png";
import Ban from "/Ban.webp";
import Head from '../Head';
import {Link} from "react-router-dom"

const Cs = () => {
  let DataThree = [
    {img:CYONE , Topic:"Cybersecurity Vs Ethical Hacking: Top 10 Differences", Content:"Cybersecurity & Ethical hacking and have been key in making sure that your data online"},
    {img:CYTWO , Topic:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!", Content:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!"},
    {img:CYTHREE, Topic:"Top 10 Ethical Hacking Books for Beginner to Advanced", Content:"Did you know that according to the University of Maryland hackers attack every 39 secondsd"},
    {img:Four , Topic:"Did you know that according to the University of Maryland hackers attack every 39 seconds", Content:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from"},
    {img:csFive , Topic:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?", Content:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,"},
    {img:CYSIX , Topic:"Top 7 Cyber Security Attacks in Real Life", Content:"Cyber security attacks are the type of actions that are designed to destroy, steal, modify,"},
    {img:CYSEVEN , Topic:"Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap", Content:"Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap"},
    {img:CYEight , Topic:"How Is Cyber Security Important To Our Lives?", Content:"Cybersecurity is an exact solution that is sought either by a billionaire with a massive"},
    {img:CsFinal , Topic:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!", Content:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!"}
   ]

  return (
    <>
     <Head />
      <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 mt-4">
               <img src={Ban} alt="" className='img  img-fluid' />
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
            {DataThree.map((e,i) => ( 
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

export default Cs