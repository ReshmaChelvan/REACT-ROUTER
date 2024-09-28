import React from 'react'
import Ban from "/Ban.webp";
import {Link} from "react-router-dom"
import Head from '../Head';

const Courses = () => {
  const FourData = [
    {Topics: "Automation Testing Engineer Salary in India 2023 ", Content: "Are you someone who’s interested in an automation testing career? Yes, if you’re considering a "},
    {Topics: "Data Transformers: Roles and Responsibilities of Data ", Content: "Have you ever stopped to think about how the apps on your phone know exactly "},
    {Topics: "The 8 Essential Skills for a Successful Automation Tester ", Content: "Being able to automate tasks is one of the most revered skills in the tech "},
    {Topics: "Proven Mechanical Engineering Career Roadmap 2023 ", Content: "In this age and time, where computer science and engineering are reining all over, it "},
    {Topics: "Roles and Responsibilities of Digital Marketers ", Content: "We live in a time when our mobile screens have become the shopping windows. As "},
    {Topics: "Proven Mechanical Engineering Career Roadmap 2023 ", Content: "Have you ever wondered how your favorite apps work so smoothly? That’s where “automation testing” "},
    {Topics: "In this age and time, where computer science and engineering are reining all over, it ", Content: "In this age and time, where computer science and engineering are reining all over, it "},
    {Topics: "How to Become a UI/UX Designer in India ", Content: "How to Become a UI/UX Designer in India "},
    {Topics: "Best Websites to Learn Data Science in 2023: Beginner to Expert", Content:"Are you interested in learning data science but not sure where to start? Don’t worry;"}
  ]
  return (
    <>
    <Head />
     <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-sm-12">
          <img src={Ban} className="img img-fluid" alt="" />
        </div>
      </div>
     </div>
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
        <div className="row mt-2">
            {FourData.map((e, i) => ( 
            <div className="col-sm-4  " key={i}>
              <div className="cart p-3">
                  <h5 className='mt-2'>{e.Topics}</h5>
                  <p>{e.Content}</p>
              </div>
            </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default Courses