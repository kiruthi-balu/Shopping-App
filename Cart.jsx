import React from "react";
import "./Cart.css";


function Cart({ myCart }) {
  return (
    <div id="Cart_Main">
       <div id="Cart_BG_Img">
       <img src="https://5.imimg.com/data5/BR/MO/SB/SELLER-2045989/shopping-bag-500x500.png" alt="" />
       </div>
      <div style={{textAlign:"center"}}>
        <h1>Take To Home</h1>
      </div>
      <div>
        {myCart.length === 0 ? (
          <div> Your Cart Is Empty Now ! ! !</div>
        ) : (
          <div id="Cart_item" >
            {myCart.map((items) => (
              <div id="Cart_product" key={items.name}>
                <h2> Product:{items.name}</h2>
                <h3> Price:{items.price} </h3>
                <img src={items.source} alt={items.name} id="Cart_Image"/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
