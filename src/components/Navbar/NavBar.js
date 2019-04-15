import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/Auth';
import {withRouter} from 'react-router-dom';
import {Layout, Menu} from "antd";

const {Header} = Layout;

class NavBar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <Menu
                theme="dark"
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
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{lineHeight: '64px'}}
            >
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/register">Register</Link>
                </Menu.Item>
            </Menu>
        )
        return (
            <Header>
                <div className="logo"/>
                {isAuthenticated ? authLinks : guestLinks}
            </Header>
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