import React from "react";
import { Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import pp1 from "../images/reviewer_image1.jpg";
import pp2 from "../images/reviewer_image2.jpg";
import pp3 from "../images/reviewer_image3.jpg";
import pp4 from "../images/reviewer_image4.jpg";
import { Rating } from "@material-tailwind/react";
import parse from "html-react-parser";

function ReviewCard({ reviews, num }) {
  const navigate = useNavigate();

  const showReview = () => {
    navigate("/review-page", { state: { reviews } });
  };

  const { name, rating, review, reviewer_name } = reviews;
  let img = pp4;
  if (name === "Oppenheimer") img = pp1;
  if (name === "Barbie") img = pp2;
  if (name === "Blue Beetle") img = pp3;
  return (
    <div
      onClick={showReview}
      className=" text-base px-4 review-card-container drop-shadow-md cursor-pointer"
    >
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
        <Rating value={rating ? rating : 3} readonly />
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
        {parse(review)}
      </div>
    </div>
  );
}

export default ReviewCard;
