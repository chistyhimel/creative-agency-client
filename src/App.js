import React, { createContext, useState } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import UserProfile from "./components/UserProfile/UserProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderForm from "./components/UserProfile/OrderForm";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [service, setService] = useState(null);
  return (
    <UserContext.Provider
      value={{
        value: [loggedInUser, setLoggedInUser],
        value2: [service, setService],
      }}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/user">
            <UserProfile></UserProfile>
          </PrivateRoute>
          <PrivateRoute path="/user/order/:serviceName">
            <OrderForm></OrderForm>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
