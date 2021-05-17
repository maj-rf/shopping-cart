import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalstyle';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Navbar from './Navbar';

const Routes = () => {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  const addItem = (image, name, price, quantity) => {
    let list = Object.assign([], cartList);
    if (quantity === 0) return;
    //check if cartItem already exists and only update quantity if added again
    if (list.some((item) => item.name === name)) {
      let itemIndex = list.findIndex((item) => item.name === name);
      list[itemIndex].quantity += quantity;
    } else {
      list.push({
        image: image,
        name: name,
        price: price,
        quantity: quantity,
      });
    }
    setCartList(list);
  };

  const clearCart = () => {
    setCartList([]);
  };

  const removeItem = (name) => {
    let list = Object.assign([], cartList);
    let itemIndex = list.findIndex((item) => item.name === name);
    list.splice(itemIndex, 1);
    setCartList(list);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar orderNumber={cartList.reduce((a, b) => a + b.quantity, 0)} />
      <Switch>
        <Route exact path="/" component={Home} replace />
        <Route
          exact
          path="/shop"
          render={() => <Shop addItem={addItem} replace />}
        />
        <Route
          exact
          path="/cart"
          render={() => (
            <Cart
              cartList={cartList}
              clearCart={clearCart}
              removeItem={removeItem}
              replace
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
