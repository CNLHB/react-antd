import React from 'react'
import Footer from '../../components/Footer/footer'
import NavLeft from '../../components/NavLeft/index'
import Header from '../../components/Header/header'
import Content from '../../components/content/content'

import { Row, Col } from 'antd'
import '../../style/common.less'
export default class Admin extends React.Component {

    render() {
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