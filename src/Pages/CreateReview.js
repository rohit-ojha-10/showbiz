import { Button, Input, Rating, Typography } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { LOCAL_API_URL } from "../constants";

export default function CreateReview() {
  const [rated, setRated] = React.useState(1);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const submitData = async () => {
    console.log(title, value);
    const token = localStorage.getItem("authToken");
    const resp = await axios.post(
      `${LOCAL_API_URL}/add-review`,
      { title: title, rating: rated, content: value },
      {
        headers: {
          Authorization: `Bearer ${token ? token : ""}`,
        },
      }
    );
    console.log(resp);
  };
  //   console.log("hey", value, title);
  return (
    <div className="px-20">
      <div className="m-auto">
        <div className="mb-4 flex flex-col gap-6">
          <p class="subpixel-antialiased text-white text-3xl m-auto mt-4 lato-font font-bold">
            Write your review here!
          </p>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            style={{ backgroundColor: "white" }}
            size="lg"
            label="Title"
          />
        </div>
      </div>
      <div className="text-white flex items-center gap-2 mb-4">
        <Rating
          className="text-white bg-white-500"
          value={1}
          onChange={(value) => setRated(value)}
          unratedColor="white"
        />
        <Typography
          color="blue-gray"
          className="text-white font-medium lato-font font-semibold"
        >
          {rated}.0 Rated
        </Typography>
      </div>

      <div style={{ height: "70vh", backgroundColor: "white" }}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ border: "0px", backgroundColor: "white", height: "100%" }}
        />
      </div>
      <Button
        className="rounded-none mt-1.5 relative z-10"
        onClick={submitData}
        fullWidth
      >
        Submit
      </Button>
    </div>
  );
}
