import React from 'react'
import { Row, Col } from 'antd'
import './header.less'
import Axios from '../../config/axios'
export default class Header extends React.Component {
    state={
        weather: ""
    }
    componentWillMount() {
        this.setState({
            userName: '河畔一角'
        })
        setInterval(()=>{
            this.setState({
                date: new Date().toLocaleString()
            })
        },1000)
        this.getWeatherAPIData()
    }
    getWeatherAPIData() {
        const appid = "29271691"
        const appsecret = "G4RVS5M8"
        const url = "https://www.tianqiapi.com/api/?version=v1&appid=29271691&appsecret=G4RVS5M8"
        const param = {
            appid,
            appsecret,
            version: "v1",
            city: '潮州'
        }
        Axios.jsonp({
            url
        }).then(res=>{
            this.setState({
                weather: res.data[0].wea
            })
            
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎, {this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.date + " "}</span>
                        <span className="weather-detail">  {this.state.weather}</span>

                    </Col>
                </Row>
            </div>
        )
    }
}