import "./styles.css";
import Productdata from "./Productdata";
import { Routes, Route, Link } from "react-router-dom";
import Singleitem from "./SingleItemPage";
import Mycart from "./Mycart";
import Wishlist from "./wishlist";
import { useContext } from "react";
import { CartContext } from ".";
import PageNotfound from "./pagenotFound";
export default function App() {
  const { cart, wishlist } = useContext(CartContext);
  return (
    <div className="App">
      <div>
        <nav>
          <h1>Product Listing Page </h1>
        </nav>
      </div>

      <div className="link">
        <Link to="/Mycart">Mycart({cart.length})</Link> ||{" "}
        <Link to="/Wishlist">My wishlist({wishlist.length})</Link>
        <Routes>
          <Route path="/" element={<Productdata />} />
          {/* <Route path="/products/viewitem/:productid" element={<Singleitem />} /> */}
          <Route path="/:productid" element={<Singleitem />} />
          <Route path="/Mycart" element={<Mycart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
      </div>
    </div>
  );
}
