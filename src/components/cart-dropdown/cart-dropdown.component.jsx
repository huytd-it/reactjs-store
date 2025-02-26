import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Thay thế withRouter
import CustomButton from '@/components/custom-button/custom-button.component';
import CartItem from '@/components/cart-item/cart-item.component';

import './cart-dropdown.style.scss';
import { selectCartItems } from '@/redux/cart/cart.selectors';
import { toggleCartHidden } from '@/redux/cart/cart.actions';

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        navigate('/checkout'); // Thay thế history.push
        dispatch(toggleCartHidden());
      }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
