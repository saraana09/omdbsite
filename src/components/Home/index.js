import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Movie from "../Movie";

function Home({ dispatch, favorites }) {
  const [movies, setMovies] = useState([]);
  const [userSearch, setUserSearch] = useState("");

  const fetchData = async () => {
    let response = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDBSITE_KEY}&s=${userSearch}`
    );
    setMovies(response.data.Search);
  };

  return (
    <div>
      <h1>Home</h1>
      <input onChange={(event) => setUserSearch(event.target.value)} />
      <button onClick={() => fetchData()}>Search</button>

      {movies.map((movie, index) => (
        <Movie
          favorites={favorites}
          dispatch={dispatch}
          movie={movie}
          key={index}
        />
      ))}
    </div>
  );
}

export default Home;

// // https://www.omdbapi.com/?apikey=3d7eed43&s=avatar
