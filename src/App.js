import React from "react";
import {Route,Switch,Redirect} from 'react-router-dom';
import style from "./App.module.css";
import Signup from "./Components/Signup";
import Login from "./Components/login";



function App() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Redirect from="/" to='/signup'/>
      </Switch>
    </div>
  );
}

export default App;
