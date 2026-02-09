import "./searchComp.css";
import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = process.env.REACT_APP_APIKEY;

export default function SearchComp({ Recipe, setRecipe }) {
  const [Query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchRecipe() {
      if (!API_KEY) {
        setRecipe([]);
        return;
      }

      let res = await fetch(`${URL}?query=${Query}&apiKey=${API_KEY}`);
      let response = await res.json();
      setRecipe(Array.isArray(response?.results) ? response.results : []);
    }
    fetchRecipe();
  }, [Query, setRecipe, API_KEY]);
  return (
    <div className="container">
      <input
        className="input"
        type="text"
        value={Query}
        placeholder="name of the search food"
        onChange={(e) => setQuery(e.target.value)}
      />
      {!API_KEY && (
        <p className="inputhelper">
          Missing API key. Set REACT_APP_APIKEY in .env and restart.
        </p>
      )}
    </div>
  );
}
