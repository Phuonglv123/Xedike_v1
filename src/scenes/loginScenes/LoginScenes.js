import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, Checkbox, Col, Form, Icon, Input, Row} from 'antd';

import {withRouter} from "react-router";
import './LoginScenes.css'
import AppURL from "../../components/route/AppUrl";
import Auth from "../../service/Auth";

type Props = {
    history: History
}

type State = {
    email: '',
    password: '',
    TextError: null,
}


class LoginScene extends Component<Props, State> {
    state: State = {
        email: '',
        password: '',
        TextError: null,
    };

    _onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState({
            isLoading: true
        })
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let res = await Auth.login({
                    email: this.state.username,
                    password: this.state.password
                });
                Auth.saveUser(res.data);
                Auth.loadUser();
                this.props.history.push(AppURL.home());
            }
        });
    };

    render(): React.ReactNode {
        const {getFieldDecorator} = this.props.form;
        return (
            <Row>
                <Col span={14}>
                    <div className="backGround">

                    </div>
                </Col>
                <Col span={10}>
                    <div className="form-sign-center">
                        <div className="gsuite-form-sign">
                            <div className="form-sign-img">

                                <span>PUPAM</span>
                                <span>|</span>
                                <span>G-Suite</span>
                            </div>
                            <Card bordered={false}>
                                <div className="backGround-form">
                                    <div>
                                        <div className="img">
                                            <span className="gsuite-text-error fade-in">{this.state.TextError}</span>
                                        </div>
                                        <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                                            <Form.Item>
                                                {getFieldDecorator('userName', {
                                                    rules: [{required: true, message:'Please enter your id!'}],
                                                })(
                                                    <div className="label-account">
                                                        <span>ID</span>
                                                        <Input
                                                            prefix={<Icon type="user"
                                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            placeholder='ID' name="username"
                                                            value={this.state.username}
                                                            onChange={this._onChange.bind(this)}/>
                                                    </div>
                                                )}
                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator('password', {
                                                    rules: [{required: true, message: 'Please enter your password!'}],
                                                })(
                                                    <div className="label-account">
                                                        <span>Password</span>
                                                        <Input.Password
                                                            prefix={<Icon type="lock"
                                                                          style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                            type="password" placeholder='Password' name="password"
                                                            value={this.state.password}
                                                            onChange={this._onChange.bind(this)}/>
                                                    </div>
                                                )}
                                            </Form.Item>
                                            <Form.Item>
                                                {getFieldDecorator('remember', {
                                                    valuePropName: 'checked',
                                                    initialValue: true,
                                                })(
                                                    <Checkbox>Remember me</Checkbox>
                                                )}
                                                <Button type="primary" htmlType="submit" className="login-form-button"
                                                        loading={this.state.isLoading}>
                                                    Log in
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gsuite-footer-login">
                            <span>G-SuiteX by <a href="https://gsuite.pupam.com/vi/">Pupam</a> @Copyright 2019</span>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }

}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export const myForm = Form.create({})((LoginScene));


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(myForm));
