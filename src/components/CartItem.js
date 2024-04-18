const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, category, image, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{category}</h4>
      <div className="flex justify-center items-center">
      <img src={image} alt="" className="w-[70px]" />
      </div>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button className=" text-sm bg-orange-400 p-2 mb-2 text-white rounded-md" onClick={() => delOneFromCart(id)}>Eliminar Uno</button>
      <br />
      <button className=" text-sm bg-orange-400 p-2 text-white rounded-md" onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
