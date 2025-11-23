import "./fooddetail.css"
import { useEffect, useState } from "react";
export default function Fooddetail({foodid}){
  const [food, setfood]=useState({});
  const [loading, setloading]=useState(true);
  const Url=`https://api.spoonacular.com/recipes/${foodid}/information`
  let API_key="036eff08c7d54f19af7eebfacee958e4";
  useEffect(()=>{
    async function fetchingrident(){
    let resp=await fetch(`${Url}?apiKey=${API_key}`);
    let response=await resp.json(); 
    setfood(response)  
    setloading(false);
    }fetchingrident();//self invoking function 
                },[foodid]);
    return(
        <div>
          <div  className="recipecard">
            <h1 className="recipename"> Name:{food.title}</h1>
             <img  className="recipeimage" src={food.image} alt="" height={200} width={300}/>
          </div>
          <span  className="recipedetail">
            <strong>
             ⏲ {food.readyInMinutes} minutes
            </strong>
          </span>
          <span  className="recipedetail">
            <em>{food.vegetarian? <p>🍅vegetarian food</p>:<p>🍖Non-vegetarian food</p>}</em>
          </span>
           <span>
          <p  className="recipedetail">💲{Math.round((food.pricePerServing/100))} for one plate</p>
           </span>
           <div>
            <h2 className="recipedetail">Ingredient</h2>
            <div className="recipedetail">
                { loading? (<p>the data is loading...</p>):food.extendedIngredients.map((ingredient)=>(<div key={ingredient.id}>
                 {/* <img src={`https://api.spoonacular.com/cdn/ingredients/_75x75/${ingredient.name}.jpg`}/> */}
                <h4>{ingredient.name}</h4>
                <h4 style={{fontWeight:"lighter"}}>{ingredient.amount}  {ingredient.unit}</h4>
             </div>))} 
          
            </div>
           </div>
           <div>
            <h2 className="recipetitle">Preparation guideline</h2>
            <div className="recipeinstruction">
               { loading? (<p>the data is loading...</p>): 
             (food.analyzedInstructions[0].steps.map((process)=>(<li key={process.id}>{process.step}</li>)))
            }
            </div>
           </div>
           
        </div>)
}