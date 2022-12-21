import React,{useContext} from 'react'
import './CartItem.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext)
  const deleteItem=()=>{
    const deleteItem={
      id:parseInt(props.prod.id),
      quantity : parseInt(props.prod.quantity),
      price : parseInt(props.prod.price)
    }
    cartCtx.removeItem(deleteItem)
  }
  return (
    <div className='cartitem-main'>
        <div className='cartitem-img'>
            <img className='cartitem-img' src={props.prod.imageUrl} />
            <span>{props.prod.title}</span>
        </div>
        <div className='cartitem-price'>{props.prod.price}</div>
        <div className='cartitem-button'>
            <span className='cartitem-quantity'>{props.prod.quantity}</span>
            <button onClick={deleteItem} >Delete</button>
        </div>
    </div>
  )
}
export default CartItem
