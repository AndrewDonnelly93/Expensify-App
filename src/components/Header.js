import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <p><NavLink to="/" activeClassName="is-active" exact>Go home</NavLink></p>
    <p><NavLink to="/create" activeClassName="is-active">Create an expense</NavLink></p>
    <p><NavLink to="/edit" activeClassName="is-active">Edit an expense</NavLink></p>
    <p><NavLink to="/help" activeClassName="is-active">Get help</NavLink></p>
  </header>
);

export default Header;
