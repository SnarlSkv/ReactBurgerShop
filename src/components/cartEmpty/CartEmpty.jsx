import React from 'react'
import { Link } from 'react-router-dom';

import cartEmptyImg from '../../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <>
    <div className='cart cart--empty'>
      <h2>Basket empty <icon>😕</icon></h2>
      <p>
        It looks like you haven't ordered any products yet.<br/> 
        To order products, go to the main page
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" className='button button--black'>
        <span>Go Back</span>
      </Link>
    </div>
    </>
  )
}

export default CartEmpty;