import React from 'react';
import { Row, Col } from 'antd'
import './style/common.less'
// import Life from '../src/pages/demo/Life'
import Footer from './components/Footer/footer'
import NavLeft from './components/NavLeft/index'
import Header from './components/Header/header'
import Content from './components/content/content'
function App() {
    return (
        <div>
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={20} className="main">
                    <Header/>
                    <Row className="content">
                        {/* <Home/> */}
                       <Content></Content>
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        </div>
    );
}

export default App;
