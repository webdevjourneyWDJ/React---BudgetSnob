import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Header from '../components/Header';
import BudgetSnobHome from '../components/BudgetSnobHome';
import BudgetAdd from '../components/BudgetAdd';
import BudgetEdit from '../components/BudgetEdit';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
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
    </Router>
);

export default AppRouter;



