import React, {Component} from 'react';
import {Button, Checkbox, Divider, Form, Icon, Input, Modal} from 'antd';
import './LoginComponent.css'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../../actions/Auth";

class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            errors: {},
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
                const user = {
                    username: this.state.username,
                    password: this.state.password,
                }
                this.props.loginUser(user);
            }
        });
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
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
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
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
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>Remember me</Checkbox>)}
                                <a className="login-form-forgot" href="">
                                    Forgot password
                                </a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                <div className='divider-login'>
                                    <Divider>only passenger</Divider>
                                </div>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in with facebook
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                </div>
            </Modal>
        );
    }
}

LoginComponent.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export const LoginPassenger = Form.create({name: 'normal_login'})(LoginComponent);

export default connect(mapStateToProps, { loginUser })(LoginPassenger);
