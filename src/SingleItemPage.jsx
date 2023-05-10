import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from ".";

export default function Singleitem() {
  const { productid } = useParams();
  const { data } = useContext(CartContext);
  const filtereddata = data.filter(
    (f) => parseInt(f.id) === parseInt(productid)
  );
  console.log(productid);
  console.log(filtereddata);
  return (
    <div>
      <h1>About</h1>
      {filtereddata.map((item) => {
        return (
          <div>
            <h3>name:{item.name}</h3>
            <p>description:{item.description}</p>
            <p>quantity:{item.quantity}</p>
            <p>Category:{item.category}</p>
            <p>Brand:{item.brand}</p>
          </div>
        );
      })}
    </div>
  );
}
