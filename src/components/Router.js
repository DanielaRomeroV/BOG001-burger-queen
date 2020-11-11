import '../css/main.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Waiter from '../views/waiter';
import Chef from '../views/chef'



const Router = () => {
    return (
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/waiter' component={Waiter}/>
    <Route exact path='/chef' component={Chef}/>

</Switch>

    )

}

export default Router;