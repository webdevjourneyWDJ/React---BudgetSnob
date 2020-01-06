import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from '../components/Header';
import BudgetSnobHome from '../components/BudgetSnobHome';
import BudgetAdd from '../components/BudgetAdd';
import BudgetEdit from '../components/BudgetEdit';
import PageNotFound from '../components/PageNotFound';

const Router = () => (
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

export default Router;



