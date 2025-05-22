import { ImCross } from "react-icons/im";
import CartCard from "../Components/CartCard";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartitems = useSelector((state) => state.cart.cart);

  return (
    <div className="fixed right-0 top-0 bg-white w-full lg:w-[20vw] h-[100vh] p-4 overflow-y-scroll pb-40 ">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">My Order</h2>
        <button className="border px-2 border-black text-xs rounded-sm">
          <ImCross />{" "}
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {cartitems.map((item,index) => {
          const { id } = item;
          return <CartCard item={item} key={index} />;
        })}
      </div>

      <div className="fixed bottom-0 py-4 w-full bg-white">
        <p className="font-semibold">
          Items: <span>1</span>
        </p>
        <p className="font-semibold">
          Total Amount: <span>1</span>
        </p>
        <button className="mt-4 text-sm font-bold text-white  bg-green-500 hover:bg-green-700 w-[18vw]  py-2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
