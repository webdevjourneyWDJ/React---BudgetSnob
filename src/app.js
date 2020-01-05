import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import "./styles/styles.scss";

const BudgetSnobHome =() => (
    <div>Budget Snob Home</div>
)

const BudgetAdd =() => (
    <div>Budget Snob Add</div>
)

const BudgetEdit =() => (
    <div>Budget Snob Edit</div>
)

const PageNotFound = () =>(
    <div>404! - <Link to="/">Home</Link></div>
)

const Header = () => (
    <header>
        <h1>Budget Snob</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/add" activeClassName="is-active">ADD</NavLink>
        <NavLink to="/edit" activeClassName="is-active">EDIT</NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={BudgetSnobHome} exact={true}/>
                <Route path="/add" component={BudgetAdd}/>
                <Route path="/edit" component={BudgetEdit}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));



