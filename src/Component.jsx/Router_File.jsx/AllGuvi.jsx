import React from 'react'


const AllGuvi = () => {
  let AllData = [
    {Topics:"6 Best Web Development Online Courses [2023]",Content:"In the ever-evolving landscape of web development, staying at the forefront of technological advancements" },
    {Topics:"Top 9 Web Development Tools",Content:"I’m pretty sure you’ve gotten frustrated at least once in your tech lifetime with the" },
    {Topics:"Web Development Syllabus for Beginners in 2023",Content:"Web development is an essential domain in today’s tech-driven times. As a web developer, your" },
    {Topics:"Top 7 Impressive Data Engineering Webinars and Workshops 2023",Content:"Webinars and Workshops are a great way to learn things easily and efficiently. They tend" },
    {Topics:"7 Important Roles and Responsibilities of a Mechanical Engineer",Content:"Technological development is skyrocketing over the years and because of this, we forget the basic" },
    {Topics:"How Long Would It Take to Learn Mechanical Engineering?!",Content:"How Long Would It Take to Learn Mechanical Engineering?" },
    {Topics:"Best Digital Marketing Tools in 2023 [With Bonus AI Tools]",Content:"Are you looking to upgrade your digital marketing game? Did you know, according to" },
    {Topics:"How Long it Would Take to Learn Data Engineering in 2023?",Content:"Have you ever wondered how long it takes to get into the world of data" },
    {Topics:"9 Amazing Real-World Data Engineering Applications Around Us!",Content:"Have you ever wondered how your online shopping preferences are magically transformed into personalized product" }
  ]
  return (
    <>
     <div className="container">
        <div className="row">
            {AllData.map((e) => ( 
            <div className="col-sm-4  ">
              <div className="cart p-3">
                  <h5>{e.Topics}</h5>
                  <p>{e.Content}</p>
              </div>
            </div>
            ))}
        </div>
     </div>
    </>
  )
}

export default AllGuvi