import React from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'
export default class Modals extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
        showModal5: false

    }
    handleOpen = (type) => {
        this.setState({
            [type]: true
        })
    }
    onCancels = (type) => {
        this.setState({
            [type]: false
        })
    }
    handleConfim = (type) => {
        if(Modal[type]){
            Modal[type]({
                title: "确认",
                content: "你学会React了吗",
                onOk() {
                    console.log("ok")
                },
                onCancel() {
                    console.log("onCancel")
                }
            })
        }
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen("showModal1")}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("showModal2")}>自定义</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("showModal3")}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("showModal4")}>顶部20xp弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen("showModal5")}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleConfim("confirm")}>confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfim("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.handleConfim("success")}>success</Button>
                    <Button type="primary" onClick={()=>this.handleConfim("error")}>erroer</Button>
                    <Button type="primary" onClick={()=>this.handleConfim("warning")}>warning</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={() =>this.onCancels("showModal1")}
                    >
                    <p>学习React好不好</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() =>this.onCancels("showModal2")}
                    >
                    <p>学习React好不好</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={() =>this.onCancels("showModal3")}
                    >
                    <p>学习React好不好</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal5}
                    onCancel={() =>this.onCancels("showModal5")}
                    >
                    <p>学习React好不好</p>
                </Modal>
            </div>
        )
    }
}