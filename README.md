<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode-111.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits............<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# react-antd
学习react使用antd

>>>>>>> 1f7dd71c955c7e9b375f9687b8eb100225aad694
### React-Router4.0的使用
```bash
1、react-router
react-router-dom
react-router-dom核心用法
2、Router,Route,Link 相当于a标签,NavLink 
BrowserRouter,HashRouter,Switch,Redreact,Route,Link
3、HashRouter里面用一个标签包裹
4、Switch里面的路由，匹配到第一个路由，就不在向下匹配, 
about === about/1     不精准匹配的话，匹配的about就不在向下匹配
5、Route: path /exact 精准匹配/ component 匹配后的组件加载/render 
6、路由配置化，抽离出数据结构，通过map重新遍历
7、动态路由 <Route path="/:id" component={Home}/>
取参数，this.props.match.params.id

```
```js
<Switch>
    <Route path="" component={Buttons}></Route>
</Switch>

                        <HashRouter>
                         <Route path="/:id" component={Home}/>
                            {/* <Route path="statements" component={Statements}/> */}
                         <Route component={NoMatch}/>//404
                        </HashRouter>
            <HashRouter>
                <Route path="/login" component={Login} />
                <Route path="/admin"
                    render={()=>
                        <Admin></Admin>   
                    }
                />
             </HashRouter>

```
```js
    // 路由配置文件
    // admin.js
import React from 'react'
import Footer from '../../components/Footer/footer'
import NavLeft from '../../components/NavLeft/index'
import Header from '../../components/Header/header'
import Content from '../../components/content/content'
import { Row, Col } from 'antd'
import '../../style/common.less'
export default class Admin extends React.Component {

    render() {
        console.log(this.props.children)
        return (
            <div>
                <Row className="container" type="flex">
                    <Col span={4} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={20} className="main">
                        <Header />
                        <Row className="content">
                         {this.props.children}
                            {/* <HashRouter>
                                <div>
                                    <Route path="/admin/button" component={Home}></Route>
                                    <Route path="/life" component={Life}></Route>
                                </div>
                            </HashRouter> */}
                        </Row>
                        <Footer className="footer" />
                    </Col>
                </Row>
            </div>
        )
    }
}


// router.js
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Login from '../pages/login'
import Admin from '../pages/admin'
import Home from '../pages/home/index'
import Life from '../pages/demo/Life'
export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Route path="/login" component={Login} />
                <Route path="/admin"
                    render={() =>
                        <Admin>
                            <Route path="/admin/button" component={Home}></Route>
                            <Route path="/life" component={Life}></Route>
                        </Admin>
                    }
                />
            </HashRouter>
        )
    }
}
```