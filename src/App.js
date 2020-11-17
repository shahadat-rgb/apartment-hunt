
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
import HouseDetails from './Components/HouseDetails/HouseDetails';
export const UserContext = createContext();
export const HouseContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [house, setHouse]=useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <HouseContext.Provider value={[house, setHouse]}>
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
        <Route path="/houseDetails/:houseId">
          <HouseDetails></HouseDetails>
        </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </HouseContext.Provider>
      </UserContext.Provider>
     
  );
}

export default App;
