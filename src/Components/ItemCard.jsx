import Card from "./Card";
import FoodData from "../Api/FoodData";
import { useSelector } from "react-redux";

const ItemCard = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  console.log(search);
  const foodItems = FoodData.filter((item) => {
    if (category === "All") {
      return item.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    } else {
      return (
        category === item.category && item.name.toLowerCase().trim().includes(search.toLowerCase().trim())
        
      );
    }
  });
  return (
    <div className="flex flex-wrap gap-6 overflow-x-hidden">
      {foodItems.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default ItemCard;
