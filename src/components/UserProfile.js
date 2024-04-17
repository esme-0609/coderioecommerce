import React, {useState} from "react";

const UserProfile = ({ id, image, price, category }) => {
  const [count,setCount] = useState(1);
  
  const decrease = () => {
    setCount(count - 1);
  }

  const increase = () => {
    setCount(count + 1);
  }

  const dataProduct = (imagePass) => {
    console.log("imagen :: " + imagePass);
  }

  return (
    <div className="flex justify-center items-center flex-col gap-4 rounded-lg py-10 border-2	">
      <img
        src={image}
        alt=""
        className="w-[150px] p-2 object-cover"
      />
      <div className="grid grid-rows-3 gap-3">
        <div className="text-[1rem] font-bold">{category}</div>
        <div className="text-[1rem] font-bold"> $ {price}</div>
        <div className="counter">
          <button disabled={count <= 1} onClick={decrease}>-</button>
          <span className="px-5">{count}</span>
          <button disabled={count >= 5} onClick={increase}>+</button>
        </div>
        <div></div>
      </div>
      <button className=" text-sm bg-orange-400 p-2 text-white rounded-md" onClick={dataProduct(image)}>
      Add to cart
      </button>
    </div>
  );
};

export default UserProfile;
