import { useContext } from "react";
import { FavoritesContext } from "../../App";
import "./style.css";

function Movie({ movie, dispatch }) {
  // favorites !!!!! woo hoo!!!

  // check if the current movie being rendered...
  // ...has a matching id of a movie inside of favorites

  // current movie: inside of prop variable called "movie"
  // matching id: inside of prop variable (array) called "favorites"

  // const findMatchingId = (favs) => {
  //     for (let i = 0; i < favs.length; i++) {
  //         if (favs[i].imdbID === movie.imdbID) {
  //             return true
  //         }
  //     }
  //     return false
  // }
  const favorites = useContext(FavoritesContext);

  return (
    <div className="movie-card">
      {favorites.find((fav) => fav.imdbID === movie.imdbID) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="empty-heart"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          onClick={() => dispatch({ type: "add_favorite", payload: movie })}
          xmlns="http://www.w3.org/2000/svg"
          className="empty-heart"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      )}

      <h3>{movie.Title}</h3>
      <h5>type: {movie.Type}</h5>
      <h5>year: {movie.Year}</h5>
      <img src={movie.Poster} />
    </div>
  );
}

export default Movie;
