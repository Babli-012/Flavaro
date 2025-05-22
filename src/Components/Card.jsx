import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {addtocart} from '../Redux/CartSlice'

const Card = ({ item }) => {
  const { name, img, price, desc, rating } = item;
  const dispatch = useDispatch()
  return (
    <div className="w-[270px] bg-white p-6 flex flex-col gap-3 rounded-md shadow-lg">
      <div>
        <img
          src={img}
          alt={name}
          className=" w-full h-[200px] hover:scale-110 transition-all duration-300 ease-out"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold ">{name}</h3>
          <p className="text-green-500 text-sm font-bold">₹ {price}</p>
        </div>
        <p className="text-xs">
          {desc.slice(0,50)}...
        </p>
        <div className="flex justify-between items-center">
          <p className="flex items-center">
            <FaStar className="text-yellow-400 mr-2" />
            <span>{rating}</span>
          </p>
          <button onClick={()=>dispatch(addtocart({...item,qty:1}))}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-4 text-sm rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
