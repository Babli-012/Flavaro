import ItemCard from "../Components/ItemCard";

const Category = () => {
  return (
    <div className="w-[95vw] mx-auto my-8">
      <h2 className="text-lg font-semibold">Find The Best Food</h2>
      <div className="flex gap-3 my-4 ">
        <button className="p-2 px-4 bg-neutral-300 rounded-md border border-black font-semibold hover:text-white hover:bg-green-500 hover:border-none transition-all duration-300 ease-in-out">
          All
        </button>
        <button className="p-2 px-4 bg-neutral-300 rounded-md border border-black font-semibold hover:text-white hover:bg-green-500 hover:border-none transition-all duration-300 ease-in-out">
          Lunch
        </button>
        <button className="p-2 px-4 bg-neutral-300 rounded-md border border-black font-semibold hover:text-white hover:bg-green-500 hover:border-none transition-all duration-300 ease-in-out">
          Breakfast
        </button>
        <button className="p-2 px-4 bg-neutral-300 rounded-md border border-black font-semibold hover:text-white hover:bg-green-500 hover:border-none transition-all duration-300 ease-in-out">
          Dinner
        </button>
        <button className="p-2 px-4 bg-neutral-300 rounded-md border border-black font-semibold hover:text-white hover:bg-green-500 hover:border-none transition-all duration-300 ease-in-out">
          Snacks
        </button>
      </div>
      <ItemCard/>
    </div>
  );
};

export default Category;
