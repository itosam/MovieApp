import React from "react";
import smd from "./smdlogo.png";
//booststrap imports below
import { Row, Card } from "react-bootstrap";

function About() {
  return (
    //put a slide show on about and added margins to the containers as to not interfere with navbar top positioning
    <section className="about">
      <Row className="my-5 mx-5 ">
        {
          <Card
            className="bg-light jumbotron"
            style={{
              padding: "2rem 1rem",
              marginBottom: "2rem",
              marginTop: "2rem",
              borderRadius: "30px",
            }}
          >
            <Card.Body>
              <h1>
                <img
                  style={{
                    width: "50px",
                    height: "auto",
                    backgounrdColor: "white",
                  }}
                  alt="slate img"
                  src={smd}
                />
                Created by Geng | Sam | Zach{" "}
                <img
                  style={{
                    width: "50px",
                    height: "auto",
                    backgounrdColor: "white",
                  }}
                  alt="slate img"
                  src={smd}
                />
              </h1>
              <h4>
                The Slate Movie Data base is a personal movie data base that will allow
                users to search for movies, look at movie details, and add new
                movies hosted on a JSON server. </h4> 
                <h5>This application features:</h5>
                <ul>
                <li>Data fetching via JSON server</li>
                <li>Client Side routing with React Routing</li>
                <li>Search functionality using useState/useEffects</li>
                <li>styling and formatting with Bootstrap and CSS</li>
                </ul>
           
            </Card.Body>
          </Card>
        }
      </Row>
    </section>
  );
}

export default About;
