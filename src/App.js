import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Footer from './pages/Shared/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Header from './pages/Shared/Header/Header';
import Explore from './pages/Explore/Explore';
import CarDetails from './pages/Home/CarDetails/CarDetails';
import Register from './pages/Login/Register/Register';


function App() {
  return (
    <div className="Font-link">

      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/car-details/:id'>
            <CarDetails />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
