import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import svg from '../../api/assets/logo-ant.svg'
import menuConfig from '../../api/menuConfig'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(menuConfig)
        this.setState({
            menuTreeNode
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={
                            <span>
                                <Icon type="mail" />
                                <span>{item.title}</span>
                            </span>
                        }
                    key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
            <Link to={"/admin" + item.key}>{item.title}</Link>
            </Menu.Item>
        })
    }
    render() {
        function handleClick(e) {
            console.log('click', e);
        }
        return (
            <div className="nav-left">
                <div className="logo">
                    <img src={svg} alt="logo" />
                    <h1>Imooc MS</h1>
                </div>

                <Menu onClick={handleClick}
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}