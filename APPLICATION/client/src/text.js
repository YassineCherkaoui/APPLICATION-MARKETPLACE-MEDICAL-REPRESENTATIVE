import { useState , useEffect} from 'react';
// import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
import React from "react";
// import ReactDOM from "react-dom";

function Home() {




//   const [cart2, setCart2] = useState();
const [product , setProduct] = useState();
useEffect(()=>{

  axios.get(`http://localhost:8080/products`)
    .then(function (response) {
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])
console.log(product);


  const addToCart = i => {
    setProduct(prevState =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal
          };
        }
        return item;
      })
    );
  };

  const increaseQuantity = i => {
    setProduct(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 9) {
            return item;
          } else return { ...item, count: item.count + 1 };
        } else if (i === o) {
          if (item.counterVal > 9) {
            return item;
          } else
            return {
              ...item,
              counterVal: item.counterVal + 1
            };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = i => {
    setProduct(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        } else if (i === o && item.counterVal > 1) {
          return {
            ...item,
            counterVal: item.counterVal - 1
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = i => {
    setProduct(prevCart =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false
          };
        }
        return item;
      })
    );
  };

  const cartCountTotal = product.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = product.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const cartTotals = () =>
    cartCountTotal === 0 ? (
      <b>Cart is empty</b>
    ) : (
      <>
        <b>
          <p>Items in Cart: {cartCountTotal}</p>
          <p>
            Total Price: $
            {Number.isInteger(cartPriceTotal)
              ? cartPriceTotal
              : cartPriceTotal.toFixed(2)}
          </p>
        </b>
      </>
    );

  const cartItems = product.map((item, i) => (
    <React.Fragment key={item.name}>
      {item.inCart && (
        <>
          <p> Item Name: {item.name}</p>
          <p>
            Item Count: <button onClick={() => decreaseQuantity(i)}>-</button>{" "}
            {item.count} <button onClick={() => increaseQuantity(i)}>+</button>
          </p>
          <p>
            Item Subtotal: $
            {Number.isInteger(item.count * item.price)
              ? item.count * item.price
              : `${(item.count * item.price).toFixed(2)}`}
          </p>
          <button onClick={() => removeFromCart(i)}>Remove From Cart</button>
          <hr />
        </>
      )}
    </React.Fragment>
  ));

  const cartProducts = () => (
    <div className="flexParent">
      {product.map((item, i) => (
        <div key={item.name}>
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
          {!item.inCart ? (
            <>
              <button onClick={() => decreaseQuantity(i)}>-</button>
              <input readOnly type="text" value={item.counterVal} />
              <button onClick={() => increaseQuantity(i)}>+</button>
              <br />
              <button onClick={() => addToCart(i)}>add</button>
            </>
          ) : (
            <p>
              <b>Item added!</b>
            </p>
          )}
        </div>
      ))}
    </div>
  );







  return (




            <div>
      <h1>useState() Cart</h1>
      {cartItems}
      {cartTotals()}
      {cartProducts()}
    </div>


  );
}

export default Home;
