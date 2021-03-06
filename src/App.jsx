import React from 'react';
import {BrowserRouter as Router, Route, Routes, NavLink}  from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Catalog from './components/Catalog';
import Contacts from './components/Contacts';
import Error from './components/Error';
import Cart from './components/Cart';
import Item from './components/Item';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
        <Header>
          <ul className="navbar-nav mr-auto">
            <NavLink className='nav-item nav-link' to="/">
              Главная
            </NavLink>
            <NavLink className='nav-item nav-link' to="/catalog">
              Каталог
            </NavLink>
            <NavLink className='nav-item nav-link' to="/about">
              О магазине
            </NavLink>
            <NavLink className='nav-item nav-link' to="/contacts">
              Контакты
            </NavLink>
          </ul>
        </Header>
        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/catalog" exact element={<Catalog/>} />
          <Route path="/contacts" exact element={<Contacts/>} />
          <Route path="/error" exact element={<Error/>} />
          <Route path="/cart" exact element={<Cart/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/item/:id" exact element={<Item/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App;

