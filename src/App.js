import React from 'react';
import './App.css';
import {Switch , Route } from 'react-router-dom'
import Home from "./components/home/home";
import MovieDetail from "./components/movie-detail/movie-detail";

const App =()=> {
  return (
    <main>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/movie/:id' exact component={MovieDetail} />
        </Switch>
    </main>
  );
}

export default App;
