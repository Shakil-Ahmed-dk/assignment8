import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PostDetails from './Components/Post Details/PostDetails';

function App() {
  return (
    <div>

      <Router> 
        <Switch>
          <Route  path="/home">
            <Home></Home>
          </Route>

          <Route path="/:postId">
            <PostDetails></PostDetails>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
