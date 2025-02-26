import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "@/firebase/firebase.utils.jsx";
import CartIcon from "@/components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "@/components/cart-dropdown/cart-dropdown.component.jsx";
import Logo from "@/assets/crown.svg"; // ✅ Kiểm tra file tồn tại

import "./header.style.scss";
import { selectCurrentUser } from "../../redux/user/user.selectors.jsx";
import { selectCartHidden } from "../../redux/cart/cart.selectors.jsx";
import logger from "redux-logger";

const Header = ({ currentUser, hidden }) => (

  
  <div className="header">
    <Link className="logo-container" to="/">
     <img src={Logo} />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {currentUser ? (  <button  className="option" onClick={() => auth.signOut()} tabIndex="0" >SIGN OUT</button>
      ) : (
        <Link className="option" to="/sign-in">SIGN IN</Link>
      )}
      <CartIcon />
    </div>

    {!hidden && <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
