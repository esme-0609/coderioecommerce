import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, delFromCart } from "../actions/Shopping";

const Carrito = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { cart } = state.shopping;

  return (
    <div>
      <h3>Carrito</h3>
      <article className="box">
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      <button className=" text-sm bg-orange-400 p-2 mt-2 text-white rounded-md" onClick={() => dispatch(clearCart())}>Limpiar Carrito</button>
      </article>
    </div>
  );
}

export default Carrito;
