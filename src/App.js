
import './App.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './Components/Home/Home';
// import Service from './Components/Home/Service/Service';
import Login from './Components/Home/Login/Login';
import NotFound from './Components/Home/NotFound/NotFound';
// import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import Header from './Components/Home/Header/Header';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
        
         
        {/* <PrivateRoute path="/service">
          <Service></Service>
        </PrivateRoute>
         */}
        <Route path="/event">
        
        </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
