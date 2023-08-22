import React from 'react'
import {useLocation} from "react-router-dom"
function ReviewPage({title,rating,content}) {
    const location=useLocation();
    const { name, review, reviewer_name } = location.state.reviews;

    console.log(location)
  return (
    <div className='text-white px-96 mt-24' >
        <div className="title lato-font text-7xl font-bold text-center">{name}</div>
        <div className="title  text-xl font-normal">{review}</div>
        <div className="title">{reviewer_name}</div>


    </div>
  )
}

export default ReviewPage