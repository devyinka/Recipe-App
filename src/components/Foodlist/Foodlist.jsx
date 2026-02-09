import Fooditem from "../fooditem/fooditem";

const Foodlist = ({ food = [], setfoodid }) => {
  const items = Array.isArray(food) ? food : [];

  return (
    <div>
      {items.map((fooditem) => (
        <Fooditem setfoodid={setfoodid} key={fooditem.id} food={fooditem} />
      ))}
    </div>
  );
};

export default Foodlist;
