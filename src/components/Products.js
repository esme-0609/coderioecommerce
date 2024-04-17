import React, {useState} from "react";
import Pagination from "./Pagination";
import useDataFetcher from "./useDataFetcher";

export default function Products() {
    const {
        loading,
        pages,
        totalPages,
        currentPage,
        perPage,
        perVisit,
        setCurrentPage,
      } = useDataFetcher();

      const [allProducts, setAllProducts] = useState([]);
      const [total, setTotal] = useState(0);
      const [countProducts, setCountProducts] = useState(0);
      const [count,setCount] = useState(1);

      const onAddProduct = product => {
        setCount(count + 1);
    
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
        console.log(count);
        console.log(product);
        console.log(allProducts);
      }
    return (<div className="font-Poppins section" id="products">
    {loading ? (
      <div className="text-center text-5xl">Loading...</div>
    ) : (
      <>
        <div className="grid md:grid-cols-3 gap-10">
          {pages.slice(perVisit, perVisit + perPage).map(product => (
              <div className="flex justify-center items-center flex-col gap-4 rounded-lg py-10 border-2	" key={product.id}>
              <img
                src={product.image}
                alt=""
                className="w-[150px] p-2 object-cover"
              />
              <div className="grid grid-rows-2 gap-2">
                <div className="text-[1rem] font-bold">{product.category}</div>
                <div className="text-[1rem] font-bold"> $ {product.price}</div>
              </div>
              <button className=" text-sm bg-orange-400 p-2 text-white rounded-md" onClick={() => onAddProduct(product)}>
                Add to cart
              </button>
            </div>            
            //return <UserProfile key={page.id} {...page} />;
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    )}
    </div>)
}
