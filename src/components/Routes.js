import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalstyle';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Navbar from './Navbar';

const Routes = () => {
  const [cartItems, setCartItems] = useState([]);
  const addItem = (image, name, price, quantity) => {
    let list = Object.assign([], cartItems);
    list.push({
      image: image,
      name: name,
      price: price,
      quantity: quantity,
    });
    setCartItems(list);
    console.log(list);
  };

  //  const clearCart = () => {
  //     setCartItems([])
  // }

  // const removeItem = (index) => {
  //     let list = Object.assign([],cartItems);
  //     list.splice(index,1);
  //     setCartItems(list);
  // }

  return (
    <Router>
      <GlobalStyle />
      <Navbar orderNumber={cartItems.length} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" render={() => <Shop addItem={addItem} />} />
        <Route
          exact
          path="/cart"
          render={() => <Cart cartItems={cartItems} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
