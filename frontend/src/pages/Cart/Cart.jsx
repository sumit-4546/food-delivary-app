import React from 'react'
import {StoreContext} from '../../context/StoreContext.jsx'
import {useContext} from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

  const navigate=useNavigate();

  const {cartItems,food_list,removeToCart,getTotalCartAmount,url}=useContext(StoreContext);
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
                  <div className='cart-items-title cart-items-item'>
                    <img src={url+"/images/"+item.image}/>
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeToCart(item._id)} className='cross'>x</p>
                  </div>
                  <hr/>

              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>GST 18%</p>
              <p>{parseFloat((getTotalCartAmount()*0.18).toFixed(2))}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>{parseFloat((getTotalCartAmount()*1.18).toFixed(2))}</b>
            </div>
          </div>
          <button onClick={()=>{navigate('/order')}}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder="Promo code"/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**<div className='cart-total-details'>
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p></p>
            </div>
 */



