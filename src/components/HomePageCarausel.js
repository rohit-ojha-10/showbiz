import { Carousel } from "@material-tailwind/react";
 
export function HomePageCarausel() {
  return (
    <Carousel className="carousel rounded-xl m-auto">
      <img
        src={require('../images/oppenheimer.jpg')}
        alt="image 1"
        className="h-80 w-full object-cover brightness-75"
      />
      <img
        src={require('../images/barbie.jpg')}
        alt="image 2"
        className="h-80 w-full object-cover brightness-75"
      />
      <img
        src={require('../images/mi.png')}
        alt="image 3"
        className="h-80 w-full object-cover brightness-75"
      />
    </Carousel>
  );
}