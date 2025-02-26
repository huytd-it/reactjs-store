import React from "react";
import "./cart-icon.style.scss";

import  ShoppingIcon  from "@/assets/shopping-bag.svg";
import { toggleCartHidden } from "@/redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemCount } from "@/redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <button className="cart-icon" style={{backgroundColor:"white", border:"none"}} onClick={toggleCartHidden}>   
    <img src={ShoppingIcon} alt="" className="shopping-icon"  />
    <span className="item-count">{itemCount}</span>
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
