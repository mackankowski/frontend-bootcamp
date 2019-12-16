import React from 'react';
import Header from './components/Header/Header';
import { AppWrapper } from './App.css';
import Deck from './components/Deck/Deck';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Details from './components/Details/Details';

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header title='Pokedex' />
        <Switch>
          <Route exact path='/'>
            <Deck />
          </Route>
          <Route path='/pokemon/:id'>
            <Details />
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
