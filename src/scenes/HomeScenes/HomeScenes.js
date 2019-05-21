import React, {Component} from 'react';
import {Tabs, Icon, Radio, Row, Col, Select, DatePicker, Button, Card, Divider} from 'antd';
import './HomeStyle.css';

const Option = Select.Option;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

class HomeScenes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
    }


    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    onChangeDate(date, dateString) {
    }

    render() {
        return (
            <div className='app-bck'>
                <div>
                    <div className="background-blue"></div>
                </div>
                <div className="bck-card">
                    <div>
                        <img style={{width: '100%'}} src={require('../../res/img/bus.webp')} alt=""/>
                    </div>
                    <div className="tab-on">
                        <Tabs defaultActiveKey="1" tabBarStyle={{border: "none"}}>
                            <TabPane tab={<span><Icon type="apple"/>Tab 1</span>} key="1"
                                     style={{backgroundColor: 'white'}}>
                                <div>
                                    <h3>Book bus ticket</h3>
                                    <div>
                                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                                            <Radio value={1}>One Way</Radio>
                                            <Radio value={2}>Round Trip</Radio>
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div style={{padding: '20px'}}>
                                    <Row gutter={16}>
                                        <Col span={5}>
                                            <Select
                                                showSearch
                                                style={{width: '100%'}}
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>
                                        </Col>
                                        <Col span={2}></Col>
                                        <Col span={5}>
                                            <Select
                                                showSearch
                                                style={{width: '100%'}}
                                                placeholder="Select a person"
                                                optionFilterProp="children"
                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>
                                        </Col>
                                        <Col span={4}>
                                            <DatePicker style={{width: '100%'}} onChange={this.onChangeDate()}/>
                                        </Col>
                                        <Col span={4}>
                                            <DatePicker style={{width: '100%'}} onChange={this.onChangeDate()}/>
                                        </Col>
                                        <Col span={4}>
                                            <Button type="primary" block>Search</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab={<span><Icon type="android"/>Tab 2</span>} key="2">
                                Tab 2
                            </TabPane>
                        </Tabs>
                    </div>
                </div>

                {/*<div id='card-book-a'>*/}
                {/*<div>*/}
                {/*<div style={{textAlign: 'center'}}>*/}
                {/*<h3>Offer</h3>*/}
                {/*</div>*/}
                {/*<div style={{padding: '20px'}}>*/}
                {/*<Row gutter={24}>*/}
                {/*<Col span={6}>*/}
                {/*<div style={{height: '100px'}}>*/}
                {/*<img src={require('../../res/img/1553493193291.jpg')} alt=""*/}
                {/*style={{width: '100%'}}/>*/}
                {/*</div>*/}
                {/*</Col>*/}

                {/*<Col span={6}>*/}
                {/*<div style={{height: '100px'}}>*/}
                {/*<img src={require('../../res/img/1553493193291.jpg')} alt=""*/}
                {/*style={{width: '100%'}}/>*/}
                {/*</div>*/}
                {/*</Col>*/}
                {/*<Col span={6}>*/}
                {/*<div style={{height: '100px'}}>*/}
                {/*<img src={require('../../res/img/1553493193291.jpg')} alt=""*/}
                {/*style={{width: '100%'}}/>*/}
                {/*</div>*/}
                {/*</Col>*/}
                {/*<Col span={6}>*/}
                {/*<div style={{height: '100px'}}>*/}
                {/*<img src={require('../../res/img/1553493193291.jpg')} alt=""*/}
                {/*style={{width: '100%'}}/>*/}
                {/*</div>*/}
                {/*</Col>*/}
                {/*</Row>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</div>*/}
                <div className="card-ticket">
                    <div className="card-ticket-padding">
                        <Card title="Top Routes" bordered={true}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <div className="card-book-ticket">
                                        <div>
                                            <h6>Ha Noi To TP HCM</h6>
                                            <span>Tue Apr 30 2019 | Fare starts from ₹ 500</span>
                                        </div>
                                        <div>
                                            <Button type='primary'>Book</Button>
                                        </div>
                                    </div>
                                    <Divider dashed={true}/>
                                </Col>
                                <Col span={12}>
                                    <div className="card-book-ticket">
                                        <div>
                                            <h6>Ha Noi To TP HCM</h6>
                                            <span>Tue Apr 30 2019 | Fare starts from ₹ 500</span>
                                        </div>
                                        <div>
                                            <Button type='primary'>Book</Button>
                                        </div>
                                    </div>
                                    <Divider dashed={true}/>
                                </Col>
                                <Col span={12}>
                                    <div className="card-book-ticket">
                                        <div>
                                            <h6>Ha Noi To TP HCM</h6>
                                            <span>Tue Apr 30 2019 | Fare starts from ₹ 500</span>
                                        </div>
                                        <div>
                                            <Button type='primary'>Book</Button>
                                        </div>
                                    </div>
                                    <Divider dashed={true}/>
                                </Col>
                                <Col span={12}>
                                    <div className="card-book-ticket">
                                        <div>
                                            <h6>Ha Noi To TP HCM</h6>
                                            <span>Tue Apr 30 2019 | Fare starts from ₹ 500</span>
                                        </div>
                                        <div>
                                            <Button type='primary'>Book</Button>
                                        </div>
                                    </div>
                                    <Divider dashed={true}/>
                                </Col>

                            </Row>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeScenes;
