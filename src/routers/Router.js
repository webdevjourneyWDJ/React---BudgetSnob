import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from '../components/Header';
import BudgetSnobHome from '../components/BudgetSnobHome';
import BudgetAdd from '../components/BudgetAdd';
import BudgetEdit from '../components/BudgetEdit';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';

const Router = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashboard" component={BudgetSnobHome} exact={true}/>
                <Route path="/add" component={BudgetAdd}/>
                <Route path="/edit/:id" component={BudgetEdit}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router;



