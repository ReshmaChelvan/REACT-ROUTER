import React from 'react'
import banner from "/GuviBanner.webp"


const Banner = () => {
  return (
    <>
     <hr className='border-4' />
      <div className="container-fluid">
        <div className="row p-5">
            <div className="col-sm-12">
                <img src={banner} className='img   img-fluid'  alt="" />
            </div>
        </div>
      </div>
      <hr className='border-4' />
    </>
  )
}

export default Banner