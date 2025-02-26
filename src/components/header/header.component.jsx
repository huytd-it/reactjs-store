import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "@/firebase/firebase.utils.jsx";
import CartIcon from "@/components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "@/components/cart-dropdown/cart-dropdown.component.jsx";
import { selectCurrentUser } from "@/redux/user/user.selectors.jsx";
import { selectCartHidden } from "@/redux/cart/cart.selectors.jsx";
import Logo from "@/assets/crown.svg"; // ✅ Kiểm tra file tồn tại

import "./header.style.scss"; // ✅ Nhớ tạo file CSS kèm theo

const Header = ({ currentUser, hidden }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>

        {/* Nút mở menu (chỉ hiện trên mobile) */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Menu chính */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>SHOP</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          {currentUser ? (
            <button onClick={() => { auth.signOut(); setMenuOpen(false); }}>SIGN OUT</button>
          ) : (
            <Link to="/sign-in" onClick={() => setMenuOpen(false)}>SIGN IN</Link>
          )}
          <CartIcon />
        </nav>
      </div>

      {/* Hiển thị giỏ hàng nếu cần */}
      {!hidden && <CartDropdown />}
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
