import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewSection() {
  return (
    <div class="review-container flex justify-around">
      <div class="slider">
        <div class="slide-track">
          <div  class="slide">
           <ReviewCard num={1}/>
          </div>
          <div class="slide">
          <ReviewCard num={2}/>
          </div>
          <div class="slide">
          <ReviewCard num={3}/>
          </div>
          <div class="slide">
          <ReviewCard num={4}/>
          </div>
          <div class="slide">
          <ReviewCard num={1}/>
          </div>
          <div class="slide">
            <ReviewCard num={2}/>
          </div>
          <div class="slide">
           <ReviewCard num={3}/>
          </div>
          <div class="slide">
          <ReviewCard num={4}/>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
