import React, {Component} from 'react';
import {Button, Col, Divider, Form, Icon, Input, Row} from "antd";
import API from "../../service/api/API";
import type {Passenger} from "../../service/type/user";

type Props = {};

type State = {
    passenger: Passenger
}

class RegisterPassenger extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            passenger: null
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let res = await API.registerPassenger(this.state.passenger)
                console.log(res)
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const passenger = this.state.passenger;
        return (
            <div id='loginComponent'>
                <div className='header-login'>
                    <h4>Register passenger account</h4>
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
                                    value={passenger.usernanme}
                                    onChange={(e) => this.setState({
                                        passenger: {
                                            ...Passenger,
                                            name: e.target.value
                                        }
                                    })}
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
                                    value={passenger.password}
                                    onChange={(e) => this.setState({
                                        passenger: {
                                            ...Passenger,
                                            name: e.target.value
                                        }
                                    })}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your re-Password!'}],
                            })(
                                <Input
                                    style={{height: '50px'}}
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Re-Password"
                                    value={passenger.confirmedpassword}
                                    onChange={(e) => this.setState({
                                        passenger: {
                                            ...Passenger,
                                            name: e.target.value
                                        }
                                    })}
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
                                            value={passenger.firstname}
                                            onChange={(e) => this.setState({
                                                passenger: {
                                                    ...Passenger,
                                                    name: e.target.value
                                                }
                                            })}
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
                                            value={passenger.lastname}
                                            onChange={(e) => this.setState({
                                                passenger: {
                                                    ...Passenger,
                                                    name: e.target.value
                                                }
                                            })}
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
                                            value={passenger.phone}
                                            onChange={(e) => this.setState({
                                                passenger: {
                                                    ...Passenger,
                                                    name: e.target.value
                                                }
                                            })}
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
                                            value={passenger.birthday}
                                            onChange={(e) => this.setState({
                                                passenger: {
                                                    ...Passenger,
                                                    name: e.target.value
                                                }
                                            })}
                                        />,
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register passenger
                            </Button>
                            <div className='divider-login'>
                                <Divider>or</Divider>
                            </div>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in with facebook
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

const PassengerForm = Form.create({name: 'normal_login'})(RegisterPassenger);
export default PassengerForm;
