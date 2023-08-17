import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateReview() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const submitData = async () => {
    console.log(title, value);
    const token = localStorage.getItem("authToken");
    const resp = await axios.post(
      "http://localhost:4000/add-review",
      { title: title, content: value },
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
    <div>
      <div className="m-auto overflow-hidden">
        <div className="mb-4 flex flex-col gap-6">
          <p class="subpixel-antialiased text-white text-3xl m-auto mt-4">
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
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ border: "0px", backgroundColor: "white", height: "70vh" }}
      />
      <Button className="rounded-none mt-1.2" onClick={submitData} fullWidth>
        Submit
      </Button>
    </div>
  );
}
