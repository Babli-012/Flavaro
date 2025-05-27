import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removefromcart,
  incrementbyone,
  decrementbyone,
} from "../Redux/CartSlice";
import toast from "react-hot-toast";
const CartCard = ({ item }) => {
  const { img, name, price, qty, id } = item;
  const dispatch = useDispatch();
  return (
    <div className=" flex items-center gap-2 bg-white shadow-lg p-2" id={id}>
      <div>
        <img src={img} alt="name" className="w-[50px] h-[50px] " />
      </div>
      <div className="w-full flex flex-col gap-2  bg-white">
        <h3 className="font-bold text-xs">{name}</h3>
        <MdDelete
          onClick={() => {
            dispatch(removefromcart(item));
            toast(`${item.name} removed!`, {
              icon: "👋",
            });
          }}
          className="absolute right-4"
        />
        <div className="flex items-center justify-between">
          <p className="text-green-500 text-xs font-bold">₹ {price}</p>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(incrementbyone(item))}
              className="p-1 border border-black font-bold text-xs hover:border-none hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out "
            >
              <AiOutlinePlus />
            </button>
            <span className="text-xs">{qty}</span>
            <button
              onClick={() => {
                qty > 1 && dispatch(decrementbyone(item));
              }}
              className="p-1 border border-black font-bold text-xs hover:border-none hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out"
            >
              <AiOutlineMinus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
