import React, { Fragment, useEffect } from "react";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotFound from "./screens/NotFoundScreen";
import ProductDetailsScreen from "./screens/ProdcutDetailsScreen";
import { useDispatch, useSelector } from "react-redux";
import { ProductActions } from "./store/product-slice";
import useHttp from "./hooks/use-http";
import MyNav from "./components/Navbar";
import CheckoutForm from "./components/CheckoutForm";
import { URL } from "./components/Secret";

const url = `${URL}/products.json`;

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  useEffect(() => {
    const fetchProducts = (data) => {
      let productsArray = [];
      for (const key in data) {
        productsArray.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          image: data[key].image,
          numReviews: data[key].numReviews,
          desc: data[key].description,
          stock: data[key].countInStock,
        });
      }
      dispatch(ProductActions.fetchProducts(productsArray));
    };
    sendRequest(
      {
        url: url,
      },
      fetchProducts
    );
  }, [dispatch, sendRequest]);

  return (
    <Fragment>
      <MyNav />
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/home" exact>
          <HomeScreen />
        </Route>
        <Route path="/home/:productId">
          <ProductDetailsScreen />
        </Route>

        {!isLoggedIn && (
          <Route path="/signin">
            <SigninScreen />
          </Route>
        )}
        {!isLoggedIn && (
          <Route path="/signup">
            <SignupScreen />
          </Route>
        )}
        <Route path="/my-cart">
          <CartScreen />
        </Route>
        <Route path="/profile">
          <ProfileScreen />
        </Route>
        <Route path="/checkout">
          {isLoggedIn ? <CheckoutForm /> : <SigninScreen />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
