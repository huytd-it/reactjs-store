import React from "react";
import "./App.css";
import {Route} from 'react-router-dom';

import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component.jsx";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
