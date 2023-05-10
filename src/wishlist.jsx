import { useContext } from "react";
import { CartContext } from ".";

export default function Wishlist() {
  const { wishlist, removeWishlist } = useContext(CartContext);

  return (
    <div className="products">
      <h1>items:{wishlist.length}</h1>
      {wishlist.map((item) => {
        return (
          <div className="data">
            <h3>Item:{item.name}</h3>

            <span style={{ fontWeight: "bolder" }}>Description:</span>
            {item.description}
            <p>
              <span style={{ fontWeight: "bolder" }}>price:</span>
              {item.price}
            </p>

            <button onClick={() => removeWishlist(item)} className="btn">
              Remove from wishlist
            </button>
          </div>
        );
      })}
    </div>
  );
}
