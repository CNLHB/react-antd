import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import Login from '../pages/login'
import Admin from '../pages/admin'
import Life from '../pages/demo/Life'
import NoMatch from '../pages/nomatch/index'
import Buttons from '../pages/ui/buttons'
import Modals from '../pages/ui/modals'
import Loadings from '../pages/ui/loading'
import Noticetion from '../pages/ui/notice'
import Messages from '../pages/ui/message'
import Tabs from '../pages/ui/tabs'
import Carousel from '../pages/ui/carousel'
import Gallery from '../pages/ui/gallery'
import FormLogin from '../pages/form/login'
import FormRegister from '../pages/form/register'









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
                                   
                                   
                                    <Route path="/admin/ui/buttons" component={Buttons}/>
                                    <Route path="/admin/ui/modals" component={Modals}/>
                                    <Route path="/admin/ui/loadings" component={Loadings}/>
                                    <Route path="/admin/ui/loadings" component={Loadings}/>
                                    <Route path="/admin/ui/notification" component={Noticetion}/>\
                                    <Route path="/admin/ui/messages" component={Messages}/>
                                    <Route path="/admin/ui/tabs" component={Tabs}/>
                                    <Route path="/admin/ui/carousel" component={Carousel}/>
                                    <Route path="/admin/ui/gallery" component={Gallery}/>
                                    <Route path="/admin/form/reg" component={FormRegister}/>
                                    <Route path="/admin/form/login" component={FormLogin}/>



                                    

                                    <Route path="/life" component={Life}></Route>
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        }
                    />
                    <Redirect  path="/" to={{pathname: '/admin/ui/buttons'}}></Redirect>
                    <Route component={NoMatch}></Route>
                </Switch>
            </HashRouter>
        )
    }
}