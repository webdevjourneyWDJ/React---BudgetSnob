import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import BudgetSnobHome from '../components/BudgetSnobHome';
import BudgetAdd from '../components/BudgetAdd';
import BudgetEdit from '../components/BudgetEdit';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={BudgetSnobHome} exact={true}/>
                <PrivateRoute path="/add" component={BudgetAdd}/>
                <PrivateRoute path="/edit/:id" component={BudgetEdit}/>
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;



