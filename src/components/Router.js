import '../css/main.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';


/*Components*/
import Home from '../views/Home';
import Waiter from '../views/waiter';
import Chef from '../views/chef'
import notFound from '../components/notFound'



const Router = () => {
    return (
<Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/orden-mesero' component={Waiter}/>
    <Route exact path='/chef-pedidos' component={Chef}/>
    <Route component={notFound} />

</Switch>

    )

}

export default Router;