import { Route, Routes, Link } from "react-router-dom";
import { useReducer, createContext } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import Home from "./components/Home";

export const FavoritesContext = createContext();
const reducer = (state, action) => {
  // action is an object
  // it has two properties: type and payload
  // type is the kind of state change we want to perform
  // payload is the data or info we want to add, remove, update, etc to our state

  switch (action.type) {
    case "add_favorite":
      return [...state, action.payload];
    case "clear_favorites":
      return [];
    case "remove_favorite":
      return state;
    default:
      return state;
  }
};

function App() {
  const [favorites, dispatch] = useReducer(reducer, []);
  console.log(favorites);
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorites</Link>
      </nav>
      <FavoritesContext.Provider value={favorites}>
        <Routes>
          <Route
            path="/"
            element={<Home favorites={favorites} dispatch={dispatch} />}
          />
          <Route
            path="/favorite"
            element={<Favorites favorites={favorites} />}
          />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;

// https://www.omdbapi.com/?apikey=3d7eed43&s=avatar

/*


      <svg xmlns="http://www.w3.org/2000/svg" className="test" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg>


*/
