import React from 'react'
import {Link,Outlet} from "react-router-dom"
import Banner from '../Banner'
import Head from '../Head'
import AllGuvi from './AllGuvi'

const Routes = () => {
  return (
    <>
    <Head />
    <Banner />
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
    <AllGuvi />
    </>
  )
}

export default Routes