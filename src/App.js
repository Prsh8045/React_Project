import React, { useState } from 'react';
import './App.css';

const data = {
  "data": [
    {
      "name": "Cosmetics",
      "productList": [
          {
              "name": "Hair Oil",
              "price": 122
          },
          {
              "name": "Face wash",
              "price": 123
          }
      ]
  },
  {
      "name": "Household",
      "productList": [
          {
              "name": "Hair Oil",
              "price": 122
          },
          {
              "name": "Face wash",
              "price": 123
          }

      ]
    }
  ]
};

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log("Product Added to the cart.");
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (product) => {
    console.log("Product removed from the cart.");
    const updatedCart = cart.filter(item => item !== product);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      {data.data.map(category => (
        <div className="category" key={category.name}>
          <h2 style={{alignItems:"center"}}>{category.name}</h2>
          <div className="product-list">
            {category.productList.map(product => (
              <div className="product-box" key={product.name}>
                <span>{product.name}</span>
                <span>{product.price}</span>
                <button className="button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button className="button" onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
