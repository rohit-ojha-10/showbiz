import React from "react";
import { Avatar } from "@material-tailwind/react";
import pinklakdi from "../images/barbie.jpg";
import pp1 from "../images/reviewer_image1.jpg";
import pp2 from "../images/reviewer_image2.jpg";
import pp3 from "../images/reviewer_image3.jpg";
import pp4 from "../images/reviewer_image4.jpg";
import { Rating } from "@material-tailwind/react";

function ReviewCard({ reviews, num }) {
  const { name, review, reviewer_name } = reviews;
  let img = pp4;
  if (name === "Oppenheimer") img = pp1;
  if (name === "Barbie") img = pp2;
  if (name === "Blue Beetle") img = pp3;
  return (
    <div className=" text-base px-4 review-card-container">
      <div
        style={{ width: "70%", display: "flex", alignItems: "center" }}
        class="mt-3  avatar-stars"
      >
        <Avatar
          className="mr-3"
          style={{ backgroundColor: "red" }}
          src={img}
          alt="avatar"
          size="sm"
        />
        <Rating value={4} readonly />
      </div>
      <div className="font-semibold mt-2" style={{}}>
        {reviewer_name} reviewed {name}
      </div>
      <div
        className="font-medium"
        style={{
          fontSize: "0.90rem",
          height: "43%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {review}
      </div>
    </div>
  );
}

export default ReviewCard;
