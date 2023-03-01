import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  {isLoading && <p>Loading...Please Wait</p>}
      {!isLoading}
      {recentMovies.map((movie) => (
        <img
          className="home-poster"
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
  );
};

export default Home;
