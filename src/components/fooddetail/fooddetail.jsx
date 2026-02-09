import "./fooddetail.css";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_APIKEY;

export default function Fooddetail({ foodid }) {
  const [food, setfood] = useState({});
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    async function fetchingrident() {
      if (!foodid) {
        setloading(false);
        return;
      }

      setloading(true);
      seterror(null);

      try {
        const Url = `https://api.spoonacular.com/recipes/${foodid}/information`;
        let resp = await fetch(`${Url}?apiKey=${API_KEY}`);
        let response = await resp.json();

        if (response.status === "failure" || response.code === 402) {
          seterror("API quota exceeded or invalid key");
          setfood({});
        } else {
          setfood(response);
        }
      } catch (err) {
        seterror("Failed to fetch recipe details");
        setfood({});
      } finally {
        setloading(false);
      }
    }
    fetchingrident();
  }, [foodid]);
  return (
    <div>
      {error && (
        <div style={{ color: "red", padding: "10px", textAlign: "center" }}>
          {error}
        </div>
      )}
      {loading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>Loading recipe details...</p>
        </div>
      ) : !food.title ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>Select a recipe to view details</p>
        </div>
      ) : (
        <>
          <div className="recipecard">
            <h1 className="recipename"> Name:{food.title}</h1>
            <img
              className="recipeimage"
              src={food.image}
              alt=""
              height={200}
              width={300}
            />
          </div>
          <span className="recipedetail">
            <strong>⏲ {food.readyInMinutes} minutes</strong>
          </span>
          <span className="recipedetail">
            <em>
              {food.vegetarian ? (
                <p>🍅vegetarian food</p>
              ) : (
                <p>🍖Non-vegetarian food</p>
              )}
            </em>
          </span>
          <span>
            <p className="recipedetail">
              💲{Math.round(food.pricePerServing / 100)} for one plate
            </p>
          </span>
          <div>
            <h2 className="recipedetail">Ingredient</h2>
            <div className="ingredientsgrid">
              {food.extendedIngredients &&
              food.extendedIngredients.length > 0 ? (
                food.extendedIngredients.map((ingredient) => (
                  <div key={ingredient.id} className="ingredientcard">
                    {ingredient.image && ingredient.image.trim() ? (
                      <img
                        src={`https://api.spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                        alt={ingredient.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                          marginBottom: "8px",
                        }}
                      />
                    ) : null}
                    <h4>{ingredient.name}</h4>
                    <h4 style={{ fontWeight: "lighter" }}>
                      {ingredient.amount} {ingredient.unit}
                    </h4>
                  </div>
                ))
              ) : (
                <p>No ingredients available</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="recipetitle">Preparation guideline</h2>
            <div className="recipeinstruction">
              {food.analyzedInstructions &&
              food.analyzedInstructions[0] &&
              food.analyzedInstructions[0].steps ? (
                food.analyzedInstructions[0].steps.map((process, index) => (
                  <li key={index}>{process.step}</li>
                ))
              ) : (
                <p>No preparation steps available</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
