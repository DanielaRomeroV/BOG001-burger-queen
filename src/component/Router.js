import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import rol from '../views/rol';

const Router = () => {
    return (
<Switch>
    <Route exact path='/' component={rol}/>
</Switch>
    )

}

export default Router;