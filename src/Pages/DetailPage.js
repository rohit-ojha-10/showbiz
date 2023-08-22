import React from "react";
import { PageNavBar } from "../components/PageNavBar";
import { useLocation } from "react-router-dom";
import ChatSvg from "../components/ChatSvg";
import Reviews from "../components/Reviews";

export default function DetailPage() {
  const { state } = useLocation();
  const { img } = state;
  return (
    <div>
      <PageNavBar />
      <img
        className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 mt-4 blur-sm"
        src={img}
        alt="nature image"
      />
      <p class="text-white text-3xl m-auto mt-4 mb-4 lato-font font-semibold text-center">
        Some of our best reviewers , reviewed the film!
      </p>
      <Reviews />
    </div>
  );
}
