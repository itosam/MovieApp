import React from "react";
import { useEffect, useState } from "react";
import LoadScreen from "./LoadScreen"
import { Link } from "react-router-dom";
import smd from "./smdlogo.png";
//bootstrap import below
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://movie-json-server.onrender.com/movies?_sort=release_date&_order=desc&_limit=3"
    )
      .then((res) => res.json())
      .then((recentMovies) => {
        setRecentMovies(recentMovies);
        setIsLoading(false);
      });
  }, []);

  return (
    <div >
      <div style={{paddingTop:"100px", textAlign:"center"}}>
        <img
        style={{width: "100px",height:"auto",  backgounrdColor: "white"}}
        alt="slate img"
        src={smd}
      />
      <row>
      <h1 style={{}}>The Slate Movie Database</h1>
      <h5>Our personal movie database for all new movies</h5>
      </row>
      </div>
      
      <Container
        className="bg-light text-center"
        style={{
          border: "#4444 2px solid",
          padding: "2%",
          marginBottom: "2rem",
          marginTop: "05%",
          borderRadius: "30px",
        }}
      >
        <h3 className="movie-box-heading">
          <strong>Recent Releases:</strong>
        </h3>
        {isLoading && <LoadScreen />}
        {!isLoading}
        {recentMovies.map((movie) => (
          <img
            className="home-poster"
            alt="recent movie posters"
            src={movie.poster_path}
            style={{ width: "33%" }}
          />
        ))}
        <Link to="/movies">
          <Button
            variant="outline-dark"
            size="md"
            style={{ border: "solid 2px", margin: "1rem" }}
          >
            Check out all Movies
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
