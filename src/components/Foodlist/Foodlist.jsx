import Fooditem from "../fooditem/fooditem";
const  Foodlist=({food, setfoodid})=>{
    return(
        <div>
            {food.map((fooditem)=>(<Fooditem   setfoodid={setfoodid} key={fooditem.id}  food={fooditem} 
           />))}
        </div>
    )
}
export default Foodlist;