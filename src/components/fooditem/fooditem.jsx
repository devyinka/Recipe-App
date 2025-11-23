import "./fooditem.css";
export default function Fooditem({food,setfoodid}){
    return(<div className="fooditem">
            <img className="itemimage" src={food.image} alt=""/>
            <div className="itemcontent">
                 <p className="itemname">{food.title}</p>
            </div>
            <div className="buttoncontainer">
              <button onClick={()=>{
                setfoodid(food.id)
              }

              }
               className="button">view Recipe</button>
            </div>
                
    </div>)
}