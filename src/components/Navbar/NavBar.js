import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/Auth';
import {withRouter} from 'react-router-dom';
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


    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1" onClick={this.onLogout.bind(this)}>
                    Logout
                </Menu.Item>
            </Menu>
        )
        const guestLinks = (
            <Menu
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
            </Menu>
        )
        return (
            <div>
                <Header style={{backgroundColor: 'white'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div className="logo"/>
                        {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </Header>
                {this.state.modalLogin ? <LoginComponent onClose={()=>{this.setState({modalLogin: !this.state.modalLogin})}}/> : null}
                {this.state.modalRegister ? <RegiserComponent onClose={()=>{this.setState({modalRegister: !this.state.modalRegister})}}/> : null}
            </div>

        )
    }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(withRouter(NavBar));
