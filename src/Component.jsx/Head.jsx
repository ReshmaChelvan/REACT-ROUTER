import React from 'react'
import Logo from "/Logo.png";
import AllGuvi from './Router_File.jsx/AllGuvi';


const Head = () => {
  return (
    <>
      <div className="container">
         <div className="row ms-1 bg-white mt-2">
            <div className="col-sm-12 gap-5 d-flex">
                   <div className="">
                   <img src={Logo} className='mt-1'  style={{width:"100px"}} alt="Guvi-Logo" />
                   </div>
                    <div className="mt-1  ms-5 justify-context-end ms-4 ">
                      <button className='btn fw-bold ms-5'>COURSES</button>
                      <button className='btn fw-bold ms-5'>LIVE CLASSES</button>
                      <button className='btn fw-bold ms-5'>PRACTICE</button>
                      <button className='btn fw-bold ms-5'>RESOURCES</button>
                      <button className='btn fw-bold ms-5'>OUR PRODUCTS</button>
                    </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Head