import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";

import HomePage from "@/pages/homepage/homepage.component.jsx";
import ShopPage from "@/pages/shop/shop.component.jsx";
import CheckoutPage from "@/pages/checkout/checkout.component.jsx";
import Header from "@/components/header/header.component.jsx";
import SignInAndSignUp from "@/pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "@/firebase/firebase.utils.jsx";

import { setCurrentUser } from "@/redux/user/user.actions.jsx";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "@/redux/user/user.selectors.jsx";
import CollectionComponent from "./pages/collection/collection.component";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div style={{ marginTop:"3rem"}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:collectionId" element={<CollectionComponent />} />
         
          <Route
            path="/sign-in"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />
            }
          />
        </Routes>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
