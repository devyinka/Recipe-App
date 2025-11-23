import "./searchComp.css";
import { useEffect, useState } from "react";
let URL = "https://api.spoonacular.com/recipes/complexSearch";
let API_key = process.env.APIKEY;
export default function SearchComp({ Recipe, setRecipe }) {
  const [Query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchRecipe() {
      let res = await fetch(`${URL}?query=${Query}&apiKey=${API_key}`);
      let response = await res.json();
      setRecipe(response.results);
    }
    fetchRecipe();
  }, [Query]);
  return (
    <div className="container">
      <input
        className="input"
        type="text"
        value={Query}
        placeholder="name of the search food"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
