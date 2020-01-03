import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
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

const routes = (
    <BrowserRouter>
        <div>
           <Route path="/" component={BudgetSnobHome} exact={true}/>
           <Route path="/add" component={BudgetAdd}/>
           <Route path="/edit" component={BudgetEdit}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));



