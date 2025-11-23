import { useState } from "react";
import Navigationbar from "./components/Navigation/navigation";
import Innercontainer from "./components/container/innercontainer";
import Fooddetail from "./components/fooddetail/fooddetail";
import SearchComp from "./components/searchComp/searchComp";
import Outercontainer from "./components/container/outercontainer";
import Foodlist from "./components/Foodlist/Foodlist";

 function App(){
const [Recipe, setrecipe]=useState([]);
const [foodid, setfoodid]=useState("658615");
return(
  <div >
    <Navigationbar/>
    <SearchComp Recipe={Recipe} setRecipe={setrecipe}/>
    <Outercontainer>
      <Innercontainer>
         <Foodlist food={Recipe}  setfoodid={setfoodid} />food, setfoodid
      </Innercontainer>
      <Innercontainer>
         <Fooddetail  foodid={foodid}/>
      </Innercontainer>
    </Outercontainer>
    
   
  </div>
)
}
export default App;