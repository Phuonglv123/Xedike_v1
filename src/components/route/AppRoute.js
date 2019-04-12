import React, {Component} from 'react';
import AppURL from "./AppUrl";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Layout, Menu, Breadcrumb} from "antd";
import HomeScenes from "../../scenes/homeScenes/HomeScenes";
import {PrivateRoute} from "./PrivateRoute";
import LoginScenes from "../../scenes/loginScenes/LoginScenes";
import NotFound404 from "../../scenes/notFound404/NotFound404";

const {Content, Header} = Layout;

export const routes = [
    {
        path: AppURL.home(),
        exact: true,
        component: HomeScenes
    }
];

export const routesNoSidebar = [
    {
        path: AppURL.login(),
        exact: true,
        component: LoginScenes
    }
]

const DefaultContainer = () => (
    <div id="rootContainer">
        <Layout className="layout" id="components-layout-demo-custom-trigger">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                    <Switch>
                        {routes.map((route, index) => (
                            <PrivateRoute
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />

                        ))}
                        <Route component={NotFound404}/>
                    </Switch>

                </div>
            </Content>
        </Layout>
    </div>
);

export default class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routesNoSidebar.map((route, index) =>
                            <Route key={index} path={route.path} exact={route.exact} component={route.component}/>)
                    }
                    <Route component={DefaultContainer}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

