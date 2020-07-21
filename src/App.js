import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import routes from './routes';
import {withRouter} from 'react-router-dom'
// import Auth from './Components/Auth';
// import Dashboard from './Components/Dashboard';
// import Post from './Components/Post';
// import Form from './Components/Form';


function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' ? null : <Nav />}
      {routes}
    </div>
  );
}

export default withRouter(App);
