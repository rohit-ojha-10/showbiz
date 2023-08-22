import React from "react";
import {
  Barbie_Review,
  BlueBeetle_Review,
  Oppenheimer_Review,
  mi_review,
} from "../constants";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  return (
    <div className="reviews-container">
      <ReviewCard reviews={Oppenheimer_Review} num={1} />

      <ReviewCard reviews={Barbie_Review} num={1} />

      <ReviewCard reviews={BlueBeetle_Review} num={1} />

      <ReviewCard reviews={mi_review} num={1} />
    </div>
  );
}
