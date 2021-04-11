import React from 'react';
import {StyledContainer} from './components/Styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Sigup';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <Router>
      <StyledContainer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </StyledContainer>
    </Router>
  );
}

export default App;
