import React,{useContext , useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import CartItem from "./CartItem";
import './Cart.css'
import CloseButton from 'react-bootstrap/CloseButton';
import CartContext from "../../store/cart-context";




export const Cart = (props) => {
  const dummy_cart = [
    {
      id:1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id:2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id:3,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id:4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const cartCtx = useContext(CartContext)
 
 

  return (
    <Container className="cart">
       <CloseButton onClick={props.onHideCart} />
      <div className="cart-main">
        <div className="cart-item">ITEM</div>
        <div className="cart-price">PRICE</div>
        <div className="cart-quantity">QUANTITY</div>
      </div>
     {/* {console.log(cartCtx.items)} */}
      {cartCtx.items.map(item=><CartItem key={item.id} prod={item} />)}

      <div style={{"fontWeight" : "bold"}}>{`Total : ${cartCtx.totalAmount}`}</div>

  
  </Container>
  );
};

export default Cart
