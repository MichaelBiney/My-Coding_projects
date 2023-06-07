import React, { useState } from "react";
import Header from "./componets/Layout/Header";
import Meals from './componets/Meals/Meals';
import Cart from "./componets/Cart/Cart";
import Cartprovider from "./store/CartProvider";

function App() {
  const  [cartIshown, setCartIsShown] = useState(false); 

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);

  };


  return (
    <Cartprovider>
      {cartIshown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
    <Meals/>
      </main>
    </Cartprovider>
  );
}

export default App;
