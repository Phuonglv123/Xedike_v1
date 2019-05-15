import React, {Component} from 'react';
import {Button, Col, Form, Icon, Input, Row} from "antd";

class RegisterDriver extends Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id='loginComponent'>
                <div className='header-login'>
                    <h4>Register driver account</h4>
                    <span>You have account? <span>Login</span></span>
                </div>
                <div id='components-form-demo-normal-login'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    style={{height: '50px'}}
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    style={{height: '50px'}}
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    style={{height: '50px'}}
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Re-Password"
                                />,
                            )}
                        </Form.Item>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item>
                                    {getFieldDecorator('First Name', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input
                                            style={{height: '50px'}}
                                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            placeholder="First Name"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item>
                                    {getFieldDecorator('Last Name', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input
                                            style={{height: '50px'}}
                                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            placeholder="Last Name"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={16}>
                                <Form.Item>
                                    {getFieldDecorator('Phone Number', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input
                                            style={{height: '50px'}}
                                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            placeholder="Phone Number"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item>
                                    {getFieldDecorator('Birthday', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input
                                            style={{height: '50px'}}
                                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            placeholder="Birthday"
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register passenger
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );
    }
}

const DriverForm = Form.create({name: 'normal_login'})(RegisterDriver);
export default DriverForm;
