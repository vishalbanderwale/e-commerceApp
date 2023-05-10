import { useContext } from "react";
import { CartContext } from ".";
import { Link } from "react-router-dom";
export default function Mycart() {
  const { cart, handleremove } = useContext(CartContext);
  console.log(cart);
  //const filtered = data.filter((f) => f.naam);
  //console.log(filtered);
  return (
    <div className="products">
      <h1>items:{cart.length}</h1>
      {cart.map((item) => {
        return (
          <div className="data">
            <h3>Item:{item.name}</h3>

            <span style={{ fontWeight: "bolder" }}>Description:</span>
            {item.description}
            <p>
              <span style={{ fontWeight: "bolder" }}>price:</span>
              {item.price}
            </p>

            <button onClick={() => handleremove(item)} className="btn">
              Remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
