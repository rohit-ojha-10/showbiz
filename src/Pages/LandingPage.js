import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import axios from "axios";
import { PageNavBar } from "../components/PageNavBar";
import { HomePageCarausel } from "../components/HomePageCarausel";
import { Spinner } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import ReviewSection from "../components/ReviewSection";

function LandingPage() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function get_upcoming_films() {
      try {
        setLoading(true);
        const token = localStorage.getItem("authToken");
        const verify = await axios.get("http://localhost:4000/authenticate", {
          headers: {
            Authorization: `Bearer ${token ? token : ""}`,
          },
        });
        if (!verify.data.success) {
          navigate("/login");
        }
        console.log(verify.data);
        const response = await axios.get(
          "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
          {
            headers: {
              "X-RapidAPI-Key":
                "c6690533a5msh8940849c5f173bcp10f7e6jsnde4e692a72f4",
              "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
            },
          }
        );
        setLoading(false);
        setData(response.data.results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    get_upcoming_films();
  }, []);

  if (!data && loading) {
    return <Spinner className="m-auto mt-32 h-12 w-12" />;
  }
  console.log(data);
  return (
    <div className="App">
      <PageNavBar />
      {/* <div className="m-auto">
        <p class="subpixel-antialiased text-white text-3xl m-auto mt-4">
          Browse your favourite films!
        </p>
      </div> */}
      <HomePageCarausel />
      <ReviewSection/>

      <div>
        <p class="subpixel-antialiased text-white text-3xl m-auto mt-4">
          Upcoming films!
        </p>
      </div>
      <div className="card-container m-auto mt-8">
        {data &&
          data.map((movie) =>
            movie.primaryImage?.url ? <MovieCard movie={movie} /> : ""
          )}
      </div>
      <ReviewSection/>
    </div>
  );
}

export default LandingPage;
