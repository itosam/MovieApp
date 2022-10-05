import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieTile({id, title, year, poster, plot, rating, favorite, onFavoriteMovies}){
  const API_IMG="https://image.tmdb.org/t/p/w500/"

  const handleFavoriteClick = () => {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({favorite: !favorite}),
    })
    .then((r) => r.json())
    .then(onFavoriteMovies)
  }
  
  return (
    <Card className= "card" style={{ width: '26rem' }}>
       <Card.Img variant="top" src={poster} alt={title} style={{ width: '24rem' }} />
        <Card.Body>
           <Card.Title><strong>{title}</strong></Card.Title>
           <Card.Text>
            <p><strong>Release date</strong>: {year}</p>
            <p><strong>Plot</strong>: {plot}</p>
            <p><strong>Rating</strong>:{rating}</p>
           </Card.Text>
           <Button variant="primary" onClick={handleFavoriteClick}>{favorite ? "remove Favorite" : "add to Favorites"}</Button>
         </Card.Body>
    </Card> 
  );
};

export default MovieTile;