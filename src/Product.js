import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// using props to break apart the object we pass in
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the date layer, dispatch is used to shoot action into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <smalll>$</smalll>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="Men Beige & Black Printed Round Neck T-shirt" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
