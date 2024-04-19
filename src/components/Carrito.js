import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart, delFromCart } from "../actions/Shopping";

const Carrito = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { cart } = state.shopping;
  let total = 0;


  for ( let x of cart) {
    let auxTotal = x.price * x.quantity;
    total = total + auxTotal;
  }
   
  total = Number.parseFloat(total).toFixed(2);


  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(clearCart());
  }

  return (
    <div>
      <div className="py-8">
        <p className="font-bold text-2xl">Shopping cart</p>
      </div>     
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <article className="box">
            {cart.map((item, index) => (
              <CartItem
                key={index}
                data={item}
                delOneFromCart={() => dispatch(delFromCart(item.id))}
                delAllFromCart={() => dispatch(delFromCart(item.id, true))}
              />
            ))}
          </article>
        </div>
        <div id="formPay">
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
              <label for="fullname" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
              <input type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="mb-5">
              <label for="numcard" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Num. Card</label>
              <input type="text" id="numcard" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="mb-5">
              <label for="expirationdate" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expiration Date</label>
              <input type="text" id="expirationdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div className="mb-5">
              <label for="cvc" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">cvc</label>
              <input type="text" id="cvc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
            </div>
            <div>
              <p className="text-left font-bold text-xl">Total: {total}</p>
            </div>
            <button type="submit" className="float-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
