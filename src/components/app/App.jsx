import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    
} from 'react-router-dom';


export default function App() {

 return (
  <>
  <div className="app">

    <Router>
        <Switch>
             <Route exact path="/" component = {List} >
             </Route>
        
        </Switch>
    </Router>
  </div>
</>
  );
  
}
