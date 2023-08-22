import React from "react";
import ReviewCard from "./ReviewCard";
import {
  Barbie_Review,
  BlueBeetle_Review,
  Oppenheimer_Review,
  mi_review,
} from "../constants";

function ReviewSection() {
  return (
    <div class="review-container flex justify-around">
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <ReviewCard reviews={Oppenheimer_Review} num={1} />
          </div>
          <div class="slide">
            <ReviewCard reviews={Barbie_Review} num={2} />
          </div>
          <div class="slide">
            <ReviewCard reviews={BlueBeetle_Review} num={3} />
          </div>
          <div class="slide">
            <ReviewCard reviews={mi_review} num={4} />
          </div>
          <div class="slide">
            <ReviewCard reviews={Oppenheimer_Review} num={1} />
          </div>
          <div class="slide">
            <ReviewCard reviews={Barbie_Review} num={2} />
          </div>
          <div class="slide">
            <ReviewCard reviews={BlueBeetle_Review} num={3} />
          </div>
          <div class="slide">
            <ReviewCard reviews={mi_review} num={4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
