import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Layout} from "antd";
import HomeScenes from "../../scenes/HomeScenes/HomeScenes";
import NavBar from "../Navbar/NavBar";

const { Content} = Layout;

class AppRoute extends Component {
    render() {
        return (
            <Router>
                <Layout className="layout" id="components-layout-demo-top">
                    <NavBar/>
                    <Content>
                        <Switch>
                            <Route exact path="/" component={HomeScenes}/>
                        </Switch>
                    </Content>
                </Layout>
            </Router>
        );
    }
}

export default AppRoute;
