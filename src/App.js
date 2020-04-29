import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import ProductList from "./Components/ProductList/ProductList";
import { Switch, Route, BrowserRouter, useRouteMatch } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import CartDialog from "./Components/CartDialog/CartDialog";
import Details from "./Components/Details/Details";
/* import Order from "./Components/Order/Order";
import Login from "./Components/Login/Login";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"; */
import Footer from "./Components/Footer/Footer";

class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter basename="/shop">
        <div className="app">
          <Header />
          <div className="app-body">
            <Menu />
            <div className="content">
              <CartDialog />
              <Switch>
                <Route path="/shop/" exact component={ProductList} />
                <Route path="/shop/details/:id" component={Details}>
                  
                </Route>
                {/* <Route path="/login" component={Login} />
                <ProtectedRoute path="/order" component={Order} /> */}
                {/* <Route component={ProductList} /> */}
                <Route
                component={() => (
                  <div style={{ padding: 20 }}>not found</div>
                )}
              />
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
