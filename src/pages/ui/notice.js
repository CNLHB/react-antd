import React from 'react'
import { Card, Button,  notification } from 'antd'
import './ui.less'
export default class Loadings extends React.Component {
    openNotice = (open, placement) => {
        if (notification[open]) {
                notification[open]({
                    message: 'Notification Title',
                    placement,
                    description:
                        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                });
        }
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-warp">
                    <Button type="primary" onClick={() => this.openNotice('success')}>success</Button>
                    <Button type="primary" onClick={() => this.openNotice('info')}>info</Button>
                    <Button type="primary" onClick={() => this.openNotice('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.openNotice('error')}>error</Button>
                </Card>
                <Card title="通知提醒框--不同位置" className="card-warp">
                    <Button type="primary" onClick={() => this.openNotice('success',"topLeft")}>success</Button>
                    <Button type="primary" onClick={() => this.openNotice('info', "topRight")}>info</Button>
                    <Button type="primary" onClick={() => this.openNotice('warning', "bottomLeft")}>warning</Button>
                    <Button type="primary" onClick={() => this.openNotice('error',"bottomRight")}>error</Button>
                </Card>
            </div>
        )
    }
}