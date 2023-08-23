import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { HOSTED_API_URL, LOCAL_API_URL } from "../constants";
import { Spinner } from "@material-tailwind/react";
import ReviewCard from "../components/ReviewCard";
import { useState } from "react";

export default function MyReviewsPage() {
  const token = localStorage.getItem("authToken");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const get_my_reviews = async () => {
      const user_id = localStorage.getItem("user_id");
      try {
        setLoading(true);
        const resp = await axios.get(`${HOSTED_API_URL}/my-reviews`, {
          params: {
            id: user_id,
          },
          headers: {
            Authorization: `Bearer ${token ? token : ""}`,
          },
        });
        console.log(resp);
        setData(resp.data.reviews);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    get_my_reviews();
  }, []);
  if (!data && loading) {
    return <Spinner className="m-auto mt-32 h-12 w-12" />;
  }
  return (
    <div className="flex justify-around align-center">
      {data &&
        data.length &&
        data.map((review) => {
          const review_data = {
            name: review.title,
            review: review.content,
            rating: review.rating,
            reviewer_name: "You",
          };
          return <ReviewCard reviews={review_data} />;
        })}
    </div>
  );
}
