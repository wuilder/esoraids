import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './components/nav'
import Footer from './components/footer'
//import Raids from './components/raids'
import Rosters from './components/rosters'
import Singin from './components/singin'
import Singup from './components/singup'
import Probando from './components/probando'
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <main className="container-fluid">
        <Route path="/" exact component={Home} />
        <Route path="/singin" exact component={Singin} />
        <Route path="/singup" exact component={Singup} />
        <Route path="/probando" exact component={Probando} />
        <Route path="/rosters" exact component={Rosters} />
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
