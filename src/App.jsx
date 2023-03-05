import React, { useState } from "react";
import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Auth from "./Components/Authentication/Auth";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Shop from "./Components/Shop/Shop";
// import ShopCards from "./Components/Shop/Shop-card/ShopCards";
import Book from "./Components/Book-Details/Book";
import LogSign from "./Components/Log-Sign/Log-Sign";
import AddBook from "./Components/Add-Book/Add-Book";
import { loginContext } from "./Config/loginContext";

function App() {
  const [login, setLogin] = useState(false);
  const value = React.useMemo(
    () => ({
      login,
      setLogin,
    }),
    [login],
  );
  return (
    <div>
      <Nav />
      <Provider store={store}>
        <loginContext.Provider value={value}>
          <Routes>
            <Route element={<Auth />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/addbook" element={<AddBook />} />
            </Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="/details/:isbn13/" element={<Book />} />
            <Route path="/logsign" element={<LogSign />} />
          </Routes>
        </loginContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
