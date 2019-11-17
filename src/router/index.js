import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Login from '../pages/login'
import Admin from '../pages/admin'
import Home from '../pages/home/index'
import Life from '../pages/demo/Life'
import NoMatch from '../pages/nomatch/index'
import Buttons from '../pages/ui/buttons'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/admin"
                        render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/life" component={Life}></Route>
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        }
                    />
                    <Route component={NoMatch}></Route>
                </Switch>
            </HashRouter>
        )
    }
}