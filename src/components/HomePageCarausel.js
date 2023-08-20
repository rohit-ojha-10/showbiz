import { Carousel } from "@material-tailwind/react";

export function HomePageCarausel() {
  return (
    <Carousel  className="carousel m-auto">
      <img
      style={{height:"100vh"}}
        src={require("../images/oppenheimer.jpg")}
        alt="image 1"
        className=" w-full object-cover brightness-75"
      />
      <img
      style={{height:"100vh"}}
        src={require("../images/barbie.jpg")}
        alt="image 2"
        className=" w-full object-cover brightness-75"
      />
      <img
      style={{height:"100vh"}}
        src={require("../images/mi.png")}
        alt="image 3"
        className=" w-full object-cover brightness-75"
      />
    </Carousel>
  );
}
