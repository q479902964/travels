import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';

import Detail from '../pages/detail/detail.jsx'
import Home from '../pages/home/home.jsx'

class RouteConfig extends Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/detail/:id?" component={Detail}/>
                    <Route path="/" component={Home}/>
                    <Redirect to="/home"></Redirect>
                </Switch>
            </HashRouter>
        )
    }
}

export default RouteConfig;