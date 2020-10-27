import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    
} from 'react-router-dom';

import CharacterPage from '../../containers/characters/CharacterPage';
import Detail from '../../containers/detail/Detail';


export default function App() {

 return (
  <>
    <div className="app">

      <Router>
          <Switch>
              <Route exact path="/" component={CharacterPage} />
              <Route exact path="/detail/:id" component={Detail} />
          
          </Switch>
      </Router>
    </div>
  </>
  );
  
}
