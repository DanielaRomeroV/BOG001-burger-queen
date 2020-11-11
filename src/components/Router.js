import '../css/main.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';


/*Components*/
import Home from '../views/Home';
import notFound from "../components/notFound";
import Waiter from '../views/waiter';
import Chef from '../views/chef'



const Router = () => {
    return (
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/mesero' component={Waiter}/>
    <Route exact path='/cocinero' component={Chef}/>


    <Route component={notFound} />

</Switch>
    )

}

export default Router;