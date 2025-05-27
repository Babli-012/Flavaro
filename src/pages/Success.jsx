import { useEffect, useState } from "react";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    if (nav) nav.style.display = "none";
    if (footer) footer.style.display = "none";
    return () => {
      if (nav) nav.style.display = "";
      if (footer) footer.style.display = "";
    };
  }, []);

  useEffect(() => {
    const Loading = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(Loading);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex w-full h-[100vh] items-center justify-center font-bold flex-col gap-5">
          <h1>Loading.....</h1>
        </div>
      ) : (
        <div className=" flex w-full h-[100vh] items-center justify-center font-bold flex-col gap-5">
          <h2 className="text-4xl">SuccessFully order placed</h2>
          <h3 className="text-2xl">Thankyou!</h3>
          <p className="text-lg font-normal">Visit again....</p>
        </div>
      )}
    </>
  );
};

export default Success;
