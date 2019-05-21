import React, {Component} from 'react';
import {Button, Checkbox, Form, Icon, Input, Modal} from 'antd';
import Auth from '../../service/api/Auth';
import './LoginComponent.css';

type Props = {
    history: History
}

type State = {
    username: string,
    password: string,
    textError: string,
}

class LoginComponent extends Component<Props, State> {
    state: State = {
        username: '',
        password: '',
        textError: null
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let res = await Auth.signIn({
                    username: this.state.username,
                    password: this.state.password
                });
                console.log(res)
                if (res.code === 400) {
                    this.setState({
                        textError: res.detail.globalErrors
                    })
                } else {
                    Auth.saveUser(res);
                    Auth.loadUser()
                }
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
            <Modal
                visible={true}
                onCancel={this.props.onClose}
                footer={null}
            >
                <div id='loginComponent'>
                    <div className='header-login'>
                        <h4>Login</h4>
                        <span>You haven't account? <span>Register</span></span>
                    </div>
                    <div className='text-errors'>
                        <span>{this.state.textError}</span>
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
                                <a className="login-form-forgot" href="sad">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </Modal>
        );
    }
}

export const LoginPassenger = Form.create({})(LoginComponent);

export default LoginPassenger;
