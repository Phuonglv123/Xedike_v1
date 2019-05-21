import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Layout, Menu} from "antd";
import LoginComponent from "../Modal/LoginComponent";
import RegiserComponent from "../Modal/RegiserComponent";

const {Header} = Layout;

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalLogin: false,
            modalRegister: false,
        }
    }

    render() {
        const user = localStorage.getItem('user')
        return (
            <div>
                <Header style={{backgroundColor: 'white'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div className="logo"/>
                        {user ? <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Button htmlType='button' size='default'>Logout</Button>
                            </Menu.Item>
                        </Menu> : <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Button htmlType='button' size='default' onClick={() => {
                                    this.setState({modalLogin: !this.state.modalLogin})
                                }}>Login</Button>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Button htmlType='button' size='default' onClick={() => {
                                    this.setState({modalRegister: !this.state.modalRegister})
                                }}>Register</Button>
                            </Menu.Item>
                        </Menu>}

                    </div>
                </Header>
                {this.state.modalLogin ? <LoginComponent onClose={() => {
                    this.setState({modalLogin: !this.state.modalLogin})
                }}/> : null}
                {this.state.modalRegister ? <RegiserComponent onClose={() => {
                    this.setState({modalRegister: !this.state.modalRegister})
                }}/> : null}
            </div>

        )
    }
}

export default withRouter(NavBar);
