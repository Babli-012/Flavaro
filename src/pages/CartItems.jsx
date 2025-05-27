import { ImCross } from "react-icons/im";
import CartCard from "../Components/CartCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CartItems = () => {
  const cartitems = useSelector((state) => state.cart.cart);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate(null);

  const totalQty = cartitems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartitems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );
  const handleBtnClick = () => {
    if (totalQty == 0) {
      navigate("/");
    } else {
      navigate("/success");
    }
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 bg-white w-full lg:w-[20vw] h-[100vh] p-4 overflow-y-scroll pb-40 z-50
         ${
           showCart ? "translate-x-0" : "translate-x-full"
         } transition-all duration-500 `}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">My Order</h2>
          <button
            onClick={() => setShowCart(!showCart)}
            className="border px-2 border-black text-xs rounded-sm"
          >
            <ImCross />{" "}
          </button>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {cartitems.map((item, index) => {
            const { id } = item;
            return <CartCard item={item} key={index} />;
          })}
        </div>

        <div className="fixed bottom-0 py-4 w-full bg-white">
          <p className="font-semibold">
            Total Items: <span>{totalQty}</span>
          </p>
          <p className="font-semibold">
            Total Amount: <span>{totalPrice}</span>
          </p>
          <button
            onClick={handleBtnClick}
            className="mt-4 text-sm font-bold text-white  bg-green-500 hover:bg-green-700 w-[18vw]  py-2"
          >
            Checkout
          </button>
        </div>
      </div>

      <FaShoppingCart
        onClick={() => setShowCart(!showCart)}
        className={`text-5xl p-3 bg-white rounded-full shadow-lg fixed bottom-4 right-2 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default CartItems;
