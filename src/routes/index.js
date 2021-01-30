import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from '../pages/Landing';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;