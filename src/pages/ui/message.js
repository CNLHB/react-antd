import React from 'react'
import './ui.less'
import { Card,Button, message } from 'antd'
export default class Message extends React.Component {
    openMessage = (type)=>{
            if(message[type]){
                message[type]('This is a normal message');
            }
    }
    render() {
        return (
            <div>
                <Card title="全局提示框">
                    <Button type="primary" onClick={()=>this.openMessage("success")}>success</Button>
                    <Button type="primary" onClick={()=>this.openMessage("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.openMessage("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.openMessage("error")}>error</Button>
                    <Button type="primary" onClick={()=>this.openMessage("loading")}>loading</Button>

                    


                </Card>

            </div>
        )
    }
}