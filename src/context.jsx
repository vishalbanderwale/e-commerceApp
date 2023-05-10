import { useEffect, useState } from "react";
import { CartContext } from ".";
import { fakeFetch } from "./fakefetch";

export default function Context({ children }) {
  const [data, setdata] = useState([]);
  const [cart, setcart] = useState([]);
  const [wishlist, setwishlist] = useState([]);
  async function Mydata() {
    try {
      const response = await fakeFetch("https://example.com/api/products");
      setdata(response.data.products);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    Mydata();
  }, []);

  function handler(item) {
    setcart([...cart, item]);
    //setdata(data.map((m) => (m.id === item.id ? { ...m, naam: "true" } : m)));
  }
  function handleremove(item) {
    setcart(cart.filter((f) => f.id !== item.id));
  }
  function handlerwishlist(item) {
    setwishlist([...wishlist, item]);
  }
  function removeWishlist(item) {
    setwishlist(wishlist.filter((f) => f.id !== item.id));
  }
  return (
    <div>
      <CartContext.Provider
        value={{
          data,
          handler,
          cart,
          handleremove,
          handlerwishlist,
          wishlist,
          removeWishlist
        }}
      >
        {" "}
        {children}{" "}
      </CartContext.Provider>
    </div>
  );
}
