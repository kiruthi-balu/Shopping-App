import React from "react";
import "./Product.css";
function Product({ props, changeFunction }) {
  return (
    <div>
      <div id="Product_Main">
        <div id="Product_Name">
          <h1>{props.name}</h1>
        </div>
        <div id="Product_Descripition">
          <p>
            Good Quality At Lowest Price
          </p>
        </div>
        <div id="Product_Rate">
          <h3>{props.price}</h3>
        </div>
        <div id="Product_Image">
          <img src={props.source} alt={props.name} />
        </div>
        <div id="Product_Select">
          <button onClick={()=>changeFunction(props)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
