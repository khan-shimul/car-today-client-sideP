import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import CarGallery from './pages/CarGallery/CarGallery';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div className="Font-link">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <PrivateRoute path='/car-details/:id'>
              <PlaceOrder />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/explore'>
              <CarGallery />
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
