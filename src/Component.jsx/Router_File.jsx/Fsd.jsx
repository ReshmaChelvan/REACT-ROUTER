import React from "react"
import FSDONE from "/ROUTER_DOM/vite-project/public/FSDONE.webp";
import FSDTWO from "/ROUTER_DOM/vite-project/public/FSDTWO.webp";
import FSDTHREE from "/ROUTER_DOM/vite-project/public/FSDTHREE.webp";
import FSDFOUE from "/ROUTER_DOM/vite-project/public/FSDFOUR.jpg";
import FSDFIVE from "/ROUTER_DOM/vite-project/public/FSDFIVE.jpg";
import FSDSIX from "/ROUTER_DOM/vite-project/public/FSDSIX.webp";
import FSDSEVEN from "/ROUTER_DOM/vite-project/public/FSDSEVEN.jpg";
import FSDEIGHT from "/ROUTER_DOM/vite-project/public/FSDSEVEN.jpg";
import FSDNINE from "/ROUTER_DOM/vite-project/public/FSDNINE.webp";
import{Link} from "react-router-dom"
import Banner from "../Banner";
import Head from "../Head";


const Fsd = () => {
  let DataTwo = [
    {id:0,Topic:"The Top 10 Tools Every Full Stack Developer Should Master in 2023",Con:"‍As a full stack developer, having the right set of tools is crucial for your",img:FSDONE},
    {id:1,Topic:"The Ultimate Guide to Real-World Full Stack Development Applications",Con:"Full stack development has become increasingly popular in recent years, with companies seeking professionals who",img:FSDTWO},
    {id:2,Topic:"How Long Would It Take to Be a Full Stack Developer?",Con:"Have you ever wondered how much time it would take to become a skilled Full",img:FSDTHREE},
    {id:3,Topic:"Best Ways to Learn Full Stack Development in 2023",Con:"Full stack development is and will be a promising and an in-demand career in the",img:FSDFOUE},
    {id:4,Topic:"Top Skills To Become a Full Stack Developer in 2023",Con:"Are you interested in becoming a great full-stack developer? If so, then you’re at the",img:FSDFIVE},
    {id:5,Topic:"5 Career Opportunities for Full Stack Development",Con:"Ever wondered what awesome job opportunities are waiting for you in the field of Full Stack Development? Well, this blog is just for you!",img:FSDSIX},
    {id:6,Topic:"Top 26 Hibernate Interview Questions and Answers (2023)",Con:"Top 26 Hibernate Interview Questions and Answers (2023)",img:FSDSEVEN},
    {id:7,Topic:"Web Development Roadmap for Beginners 2023",Con:"Web Development is a booming, high-paying, and indeed promising career in the IT",img:FSDEIGHT},
    {id:8,Topic:"How does Apache work? A detailed introduction to Apache",Con:"Apache is the most widely used web server in the world, powering over 40% of",img:FSDNINE},
  ]
 return (
    <>
    <Head />
     <div className="container">
        <div className="row">
            <div className="col-sm-12 mt-4">
                <h1 className='display-6 ms-1 p-2  fw-bold text-secondary'>Full Stack Development</h1>
                <p className='ms-2 text-secondary w-75'>Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!</p>
                <p className='text-secondary ms-2 w-75'>The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
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
    <hr />
     <div className="container">
        <div className="row">
            {DataTwo.map((e,i) => ( 
            <div className="col-sm-4" key={i}>
              <div className="cart p-3">
                  <img src={e.img} alt="" style={{height:"200px"}} className="img img-fluid"  />
                  <h5 className="mt-2">{e.Topic}</h5>
                  <p>{e.Con}</p>
              </div>
            </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default Fsd