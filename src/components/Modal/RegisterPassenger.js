import React, {Component} from 'react';
import {Button, Checkbox, Col, Form, Icon, Input, Modal, Row} from "antd";
import API from "../../service/api/API";
import axios from 'axios';

// type Props = {};
//
// type State = {
//     passenger: Passenger
// }

class RegisterPassenger extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmedpassword: '',
            firstname: '',
            lastname: '',
            phone: '',
            birthday: ''
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let res = await axios({
                    method: 'post',
                    url: 'http://localhost:4000/api/passenger/register',
                    data: {
                        username: this.state.username,
                        password: this.state.password,
                        confirmedpassword: this.state.confirmedpassword,
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        phone: this.state.phone,
                        birthday: this.state.birthday
                    }
                });
                console.log(res)
            }
        });
    };

    _onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id='loginComponent'>
                <div className='header-login'>
                    <h4>Register passenger account</h4>
                    <span>You have account? <span>Login</span></span>
                </div>
                <div id='components-form-demo-normal-login'>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <div className="label-account">
                                    <span>UserName</span>
                                    <Input
                                        prefix={<Icon type="user"
                                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Username" name="username"
                                        value={this.state.username}
                                        onChange={this._onChange.bind(this)}/>
                                </div>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <div className="label-account">
                                    <span>Password</span>
                                    <Input
                                        prefix={<Icon type="lock"
                                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password" placeholder="Password" name="password"
                                        value={this.state.password}
                                        onChange={this._onChange.bind(this)}
                                    />
                                </div>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <div className="label-account">
                                    <span>Re-Password</span>
                                    <Input
                                        prefix={<Icon type="lock"
                                                      style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password" placeholder="Re-Password" name="confirmedpassword"
                                        value={this.state.confirmedpassword}
                                        onChange={this._onChange.bind(this)}
                                    />
                                </div>
                            )}
                        </Form.Item>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item>
                                    {getFieldDecorator('First Name', {
                                        rules: [{required: true, message: 'Please input your first name!'}],
                                    })(
                                        <div className="label-account">
                                            <span>First Name:</span>
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="text" placeholder="first name" name="firstname"
                                                value={this.state.firstname}
                                                onChange={this._onChange.bind(this)}
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item>
                                    {getFieldDecorator('Last Name', {
                                        rules: [{required: true, message: 'Please input your Last Name!'}],
                                    })(
                                        <div className="label-account">
                                            <span>Last Name:</span>
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="text" placeholder="Last Name" name="lastname"
                                                value={this.state.lastname}
                                                onChange={this._onChange.bind(this)}
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={16}>
                                <Form.Item>
                                    {getFieldDecorator('Phone Number', {
                                        rules: [{required: true, message: 'Please input your Phone Number!'}],
                                    })(
                                        <div className="label-account">
                                            <span>Phone Number:</span>
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="text" placeholder="Phone Number" name="phone"
                                                value={this.state.phone}
                                                onChange={this._onChange.bind(this)}
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item>
                                    {getFieldDecorator('BirthDay', {
                                        rules: [{required: true, message: 'Please input your BirthDay!'}],
                                    })(
                                        <div className="label-account">
                                            <span>BirthDay:</span>
                                            <Input
                                                prefix={<Icon type="lock"
                                                              style={{color: 'rgba(0,0,0,.25)'}}/>}
                                                type="text" placeholder="BirthDay" name="birthday"
                                                value={this.state.birthday}
                                                onChange={this._onChange.bind(this)}
                                            />
                                        </div>
                                    )}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="sad">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register Passenger
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
