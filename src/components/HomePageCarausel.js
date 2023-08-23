import React, { useState, useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export function HomePageCarausel() {
  const [typedText, setTypedText] = useState(""); // State to hold the typed text
  const navigate = useNavigate();
  useEffect(() => {
    const textArray = [
      "Write your Review.",
      "Publish your Review.",
      "Get Known!",
    ];
    let currentIndex = 0;
    let currentText = "";
    let interval;

    const typeText = () => {
      if (currentText.length === textArray[currentIndex].length) {
        clearInterval(interval);
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(() => {
          currentText = "";
          setTypedText("");
          interval = setInterval(typeText, 100);
        }, 2000); // Delay before starting to type the next text
      } else {
        currentText = textArray[currentIndex].substr(0, currentText.length + 1);
        setTypedText(currentText);
      }
    };

    interval = setInterval(typeText, 100); // Typing interval

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, []);

  return (
    <div
      className="carousel m-auto relative cursor-pointer"
      onClick={() => navigate("/create-review")}
    >
      {/* Image 1 */}
      <div className="relative backdrop-blur">
        {/* <img
          style={{ height: "100vh" }}
          src={require("../images/oppenheimer.jpg")}
          alt="image 1"
          className="w-full object-cover brightness-50 "
        /> */}
        <video
          className="w-full object-cover brightness-50"
          autoPlay
          muted
          loop
        >
          <source
            src={require("../video/website_video_final.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-6xl font-semibold outline-1 code-font">
            {typedText}
          </h2>
        </div>
      </div>

      {/* Other Images... */}
    </div>
  );
}
