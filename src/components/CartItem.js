const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  let { id, title, image, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <div className="">
        <div className="grid md:grid-cols-2 gap-10 my-7">
          <div className="flex justify-center">
            <img src={image} alt="" className="w-[150px] object-center" />
          </div>
          <div className="text-left">
          <h4 className="font-bold">{title}</h4>
            <h5>
              Cantidad : {quantity}
            </h5>
            <h5 className="mb-2">
              Precio = ${price * quantity}
            </h5>
            <button
              className=" text-sm bg-orange-400 p-2 mb-2 text-white rounded-md"
              onClick={() => delOneFromCart(id)}
            >
              Eliminar Uno
            </button>
            <br />
            <button
              className=" text-sm bg-orange-400 p-2 text-white rounded-md"
              onClick={() => delAllFromCart(id, true)}
            >
              Eliminar Todos
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
