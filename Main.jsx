import React from "react";
import "./Main.css";
import Navigation from "./Navigation";
import Product from "./Product";

function Main({setcartItem}) {

  const products = [
    {
      name: "Hoodie",
      price: "Rs.850/-",
      source:"https://teetall.pk/cdn/shop/products/00123c8df31fed73e730fa4346446d77.webp?v=1695122271&width=533",
    },
    {
      name: "Co-Ord set",
      price: "Rs.999/-",
      source:"https://www.theapparelbox.com/cdn/shop/products/25_8520c5f9-feb7-4630-9ee0-c6a8ba180349.jpg?v=1676973807",
    },
    {
      name: "Shirt",
      price: "Rs.750/-",
      source: "https://m.media-amazon.com/images/I/31WG221wM-L._AC_UY1100_.jpg",
    },
    {
      name: "Pant",
      price: "Rs.550/-",
      source:"https://pantproject.com/cdn/shop/products/DSC01278_cfa0cd61-bcfe-4d4b-92d3-6088b617f1e4.jpg?v=1677584122",
    },
    {
      name: "T-Shirt",
      price: "Rs.800/-",
      source:"https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/Men_Plain_Sunset_Orange_1.jpg",
    },
    {
      name: "Track Suit",
      price: "Rs.1250/-",
      source:"https://images-cdn.ubuy.co.in/65b479d70f4e56649e641638-2023-men-39-s-tracksuit-set-2-piece.jpg",
    },
    {
      name: "Wedding Suit",
      price: "Rs.2050/-",
      source:"https://i.pinimg.com/736x/91/32/51/91325161c14407f1f784a740897d3cdf.jpg",
    },
    {
      name: "Wedding Suit",
      price: "Rs.2850/-",
      source:"https://i.pinimg.com/736x/91/32/51/91325161c14407f1f784a740897d3cdf.jpg",
    },
    {
      name: "Wedding Suit",
      price: "Rs.27750/-",
      source:"https://i.pinimg.com/736x/91/32/51/91325161c14407f1f784a740897d3cdf.jpg",
    },
  ];
  const addToCart = (product) => {
    setcartItem((prevData) => [...prevData, product]);
  };
  return (
    <div>
      <div id="Main_container" className="font">
        <div id="Products">
          <Navigation />
          {/* <Product props={product1} changeFunction={addToCart}/>
                <Product props={product2} changeFunction={addToCart}/>
                <Product props={product3} changeFunction={addToCart}/>
                <Product props={product4} changeFunction={addToCart}/>
                <Product props={product5} changeFunction={addToCart}/>
                <Product props={product6} changeFunction={addToCart}/>
                <Product props={product7} changeFunction={addToCart}/>

 */}
          {products.map((product) => (
            <Product
              key={product.name}
              props={product}
              changeFunction={addToCart}
            />
          ))}
        </div>

        <div id="Main_picture">
          <img
            style={{ height: "550px" }}
            src="https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-man-shopping-online-png-image_11348210.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Main;


