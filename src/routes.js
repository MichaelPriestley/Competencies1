import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import Search from './components/Search'
import Register from './components/Register'

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/search" component={Search} />
    <Route path="/register" component={Register} />
  </Switch>
)