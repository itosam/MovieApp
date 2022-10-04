import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import { getByTitle } from '@testing-library/react';

function MovieContainer() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [favorite, setFavorites] = useState(false);


    useEffect(() => {
        fetch('http://localhost:3001/movies')
          .then(r=>r.json())
          .then(movies => {
            const updatedMovieData = movies.map(movies => {
              return {...movies, favorite: false,}
            });
            setMovies(updatedMovieData);
            })
        },[]);
        
    const onAddMovie=(newMovie)=>{
        setMovies({...movies, newMovie})
    }

    const moviesToDisplay = movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))

    const onFavoriteMovies= (favoriteMovies) => {
        const updatedMoviesClick = movies.map((movies) =>
          movies.title === favoriteMovies.title ? favoriteMovies : movies
        );
        setMovies(updatedMoviesClick);
      }

    const handleShowFavoriteMovies = () => {
        setFavorites(favorite => !favorite)
      }
      let displayFavoriteMovies = movies;
      if (favorite) {
        displayFavoriteMovies = displayFavoriteMovies.filter((movies) => movies.favorite);
      }

    return (
        <Switch>
            <Route exact path={["/movies"]}>
                <MovieList
                    movies={moviesToDisplay}
                    searchQuery={searchQuery}
                    favorite={favorite}
                    setSearchQuery={setSearchQuery}
                    onFavoritesClick={handleShowFavoriteMovies}
                    onFavoriteMovies={onFavoriteMovies}
                 />
            </Route>
            <Route path="/movies/new">
                <MovieForm onAddMovie={onAddMovie} /> 
            </Route>
        </Switch>
  )
}

export default MovieContainer;