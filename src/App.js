import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './components/nav'
import Footer from './components/footer'
import Raids from './components/raids'
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <main className="container-fluid">
        <Route path="/" exact component={Home} />
        <Route path="/raids" exact component={Raids} />
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
