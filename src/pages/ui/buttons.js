import React from 'react'
import { Card, Button, Radio } from 'antd'
import './ui.less'
export default class Buttons extends React.Component {
    state = {
        loading: true
    }
    handleCloseLoading = () => {
        if (this.state.loading) {
            this.setState({
                loading: !this.state.loading
            })
        }
    }
    render() {
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">CNLHB</Button>
                    <Button >CNLHB</Button>
                    <Button type="dashed">CNLHB</Button>
                    <Button type="danger">CNLHB</Button>
                    <Button disabled>CNLHB</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search" ></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button shape="circle" type="primary" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className="card-wrap">
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size="default">大小</Button>
                    <Button type="primary">大小</Button>
                    <Button type="primary">大小</Button>
                </Card>
            </div>
        )
    }
}