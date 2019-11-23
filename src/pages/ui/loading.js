import React from 'react'
import { Card,  Spin, Icon, Alert } from 'antd'
import './ui.less'
export default class Loadings extends React.Component {
    render() {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="Spin的用法" className="card-wrap">
                    <Spin size="small"></Spin>
                    <Spin size="default" style={{ margin: "0 10px" }}></Spin>
                    <Spin size="large" style={{ margin: "0 10px" }}></Spin>
                    <Spin indicator={icon}></Spin>

                </Card>
                <Card title="内容遮罩" className="card-wrap">

                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎学习React"
                            type="warning"
                        >
                        </Alert>
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎学习React"
                            type="info"
                        >
                        </Alert>
                    </Spin>
                    <Spin tip="加载中" indicator={icon}>
                        <Alert
                            message="React"
                            description="欢迎学习React"
                            type="success"
                        >
                        </Alert>
                    </Spin>
                    <Spin tip="加载中" indicator={icon}>
                        <Alert
                            message="React"
                            description="欢迎学习React"
                            type="error"
                        >
                        </Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}