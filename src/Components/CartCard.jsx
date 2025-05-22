import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removefromcart } from "../Redux/CartSlice";
const CartCard = ({ item }) => {
  const { img, name, price, qty, id } = item;
  const dispatch = useDispatch();
  return (
    <div className=" flex gap-2 items-center bg-white shadow-lg p-2" id={id}>
      <div>
        <img src={img} alt="name" className="w-[50px] h-[50px] " />
      </div>
      <div className="w-full flex flex-col  bg-white">
        <h3 className="font-bold">{name}</h3>
        <MdDelete
          onClick={() => dispatch(removefromcart(item))}
          className="absolute right-4"
        />
        <div className="flex items-center justify-between">
          <p className="text-green-500 text-sm font-bold">₹ {price}</p>
          <div className="flex gap-1">
            <button className="p-1 border border-black font-bold text-xs hover:border-none hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out ">
              <AiOutlinePlus />
            </button>
            <span>{qty}</span>
            <button className="p-1 border border-black font-bold text-xs hover:border-none hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out">
              <AiOutlineMinus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
