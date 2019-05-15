import React, {Component} from 'react';
import {Card, Col, Modal, Row} from 'antd';
import './LoginComponent.css';
import RegisterPassenger from "./RegisterPassenger";
import RegisterDriver from "./RegisterDriver";

const {Meta} = Card;

class RegiserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accountRegister: false,
            isType: 'passenger'
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    renderType() {
        if (this.state.isType === 'passenger') {
            return <RegisterPassenger/>
        } else if (this.state.isType === 'driver') {
            return <RegisterDriver/>
        }
    }

    render() {
        return (
            <Modal
                visible={true}
                onCancel={this.props.onClose}
                footer={null}
                width='40%'
            >
                {this.state.accountRegister ? this.renderType() : <div id='registerComponent'>
                    <div className='header-register'>
                        <h4>Do you want to register with?</h4>
                        <span>You have account? <span>Login</span></span>
                    </div>
                    <div className='choose-register'>
                        <Row gutter={32}>
                            <Col span={12}>
                                <Card
                                    onClick={()=>{this.setState({accountRegister: true, isType: 'passenger'})}}
                                    hoverable
                                    style={{width: '100%', padding: '40px'}}
                                    cover={<img style={{width: '100%'}} alt="example"
                                                src={require('../../res/img/img_signup_passenger.png')}/>}
                                >
                                    <Meta style={{textAlign: 'center'}} title="Passenger"/>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card
                                    onClick={()=>{this.setState({accountRegister: true, isType: 'driver'})}}
                                    hoverable
                                    style={{width: '100%', padding: '40px'}}
                                    cover={<img style={{width: '100%'}} alt="example"
                                                src={require('../../res/img/img_signup_driver.png')}/>}
                                >
                                    <Meta style={{textAlign: 'center'}} title="Driver"/>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>}

            </Modal>
        );
    }
}

export default RegiserComponent;
