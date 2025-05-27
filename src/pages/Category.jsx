import { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";
import FoodData from "../Api/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../Redux/CategorySlice";
import { Toaster } from "react-hot-toast";
import CartItems from "./CartItems";

const Category = () => {
  const [category, setCategory] = useState([]);
  const uniqueCategories = () => {
    const uniqueCategory = [
      ...new Set(FoodData.map((items) => items.category)),
    ];
    return uniqueCategory;
  };
  useEffect(() => {
    const cats = uniqueCategories();
    setCategory(cats);
  }, []);

  const dispatch = useDispatch();
  const Category = useSelector((state) => state.category.category);
  console.log(Category);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-[95vw] mx-auto my-8">
        <h2 className="text-lg font-semibold">Find The Best Food</h2>
        <div className="flex gap-3 my-4 ">
          <button
            onClick={() => dispatch(setCategories("All"))}
            className={`p-2 px-4  rounded-md border border-black font-semibold hover:text-white hover:bg-green-500 hover:border-none transition-all duration-300 ease-in-out ${
              Category === "All"
                ? "text-white bg-green-700 border-none"
                : "bg-neutral-300"
            }`}
          >
            All
          </button>
          {category.map((category, index) => (
            <button
              onClick={() => dispatch(setCategories(category))}
              key={index}
              className={`p-2 px-4  rounded-md border border-black font-semibold hover:text-white hover:bg-green-500 hover:border-none transition-all duration-300 ease-in-out ${
                Category === category
                  ? "text-white bg-green-700 border-none"
                  : "bg-neutral-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <ItemCard />
      </div>
      <CartItems/>
    </>
  );
};

export default Category;
