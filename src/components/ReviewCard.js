import React from 'react'
import { Avatar } from "@material-tailwind/react";
import pinklakdi from "../images/barbie.jpg"
import { Rating } from "@material-tailwind/react";

function ReviewCard({num}) {
  return (
    <div className=' text-base px-4 review-card-container'>
        <div style={{ width:"70%",display:"flex", alignItems:"center"}} class="mt-3  avatar-stars">
        <Avatar className='mr-3' style={{backgroundColor:"red"}} src={pinklakdi} alt="avatar" size="sm" />
        <Rating  value={4} readonly />
        </div>
        <div className='font-semibold mt-2' style={{}} >Catherine Spence reviewed daals {num}</div>
        <div className="font-medium" style={{ fontSize:"0.90rem", height:"43%",  width:"100%", overflow:"hidden"}} >
        “Flagging comments as "illegal and harmful" when people give her bad reviews but she's got her lackeys commenting good reviews without proving orders and you thi...”
          
        </div>
    </div>
  )
}

export default ReviewCard