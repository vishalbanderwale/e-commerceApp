import { useContext } from "react";
import { CartContext } from ".";
import { Link } from "react-router-dom";
export default function Productdata() {
  const { data, handler, handlerwishlist } = useContext(CartContext);

  return (
    <div className="products">
      {data.map((item) => {
        return (
          <div className="data">
            <h3>Item:{item.name}</h3>
            <span style={{ fontWeight: "bolder" }}>Description:</span>
            {item.description}
            <p>
              <span style={{ fontWeight: "bolder" }}>price:</span>
              {item.price}
            </p>
            <Link to={`/${item.id}`}>view Item</Link>
            {<br />}
            {<br />}
            <button onClick={() => handler(item)} className="btn">
              add to cart
            </button>{" "}
            <button onClick={() => handlerwishlist(item)} className="btn">
              add to Wishlist
            </button>
          </div>
        );
      })}
    </div>
  );
}
