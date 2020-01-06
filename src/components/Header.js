import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Budget Snob</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/add" activeClassName="is-active">ADD</NavLink>
        <NavLink to="/edit" activeClassName="is-active">EDIT</NavLink>
    </header>
)

export default Header;