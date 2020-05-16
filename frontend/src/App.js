import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './containers/User/Login/Login';
//import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/register" component={Register} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/product/:_id" component={ProductDetail} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
