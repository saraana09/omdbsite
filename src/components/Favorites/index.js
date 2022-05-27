import axios from "axios";
import Movie from "../Movie";
import { useContext } from "react";
import { FavoritesContext } from "../../App";

function Favorites() {
  const favorites = useContext(FavoritesContext);
  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((movie, index) => (
        <Movie movie={movie} key={index} />
      ))}
    </div>
  );
}

export default Favorites;
