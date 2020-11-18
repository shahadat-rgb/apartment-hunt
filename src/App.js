import "./App.css";
import { createContext,  useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import HouseDetails from "./Components/HouseDetails/HouseDetails"
import AdminPage from "./Components/AdminPage/AdminPage/AdminPage"
import MakeAdmin from "./Components/AdminPage/MakeAdmin/MakeAdmin"
import AddService from "./Components/AdminPage/AddService/AddService"


import Login from "./Components/Home/Login/Login";
import NotFound from "./Components/Home/NotFound/NotFound";

import PrivateRoute from "./Components/Home/PrivateRoute/PrivateRoute";
import Hello from "./Components/Hello/Hello";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser ]}
    >
      <Router>
        <Switch>
          <Route path="/home"></Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/admin">
            <AdminPage></AdminPage>
          </PrivateRoute>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          

          <PrivateRoute path="/houseDetails/:houseId">
            <HouseDetails></HouseDetails>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
