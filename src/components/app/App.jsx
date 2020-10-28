import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    
} from 'react-router-dom';
import CharacterPage from '../../pages/characters/CharacterPage';
import Detail from '../../pages/detail/Detail';
import Header from '../header/Header';

export default function App() {

 return (
  <>
    <Header />
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
