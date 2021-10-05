import React from 'react'
import { Card, Col, Row, Space, Typography } from 'antd'
import rocket from '../../assets/rocket.png'
import manage from '../../assets/manager.png'
import house from '../../assets/house.png'

export default function ContentShowCase() {

    const span = 8;

    return (
        <div className="app-content-visitor-showCase">
            <Row gutter={16} align="middle">
                <Col lg={span}>
                    <Card className="app-content-visitor-card" bordered={false}>
                        <Space 
                            direction="vertical" 
                            align="center"
                            className="app-content-visitor-space"
                        >
                            <img src={rocket} alt="rocket" />
                            <Typography.Paragraph strong>
                                Quick set up
                            </Typography.Paragraph>
                        </Space>
                    </Card>
                </Col>
                <Col lg={span}>
                    <Card className="app-content-visitor-card" bordered={false}>
                        <Space 
                            direction="vertical" 
                            align="center"
                            className="app-content-visitor-space"
                        >
                            <img src={house} alt="house" />
                            <Typography.Paragraph strong>
                                property management
                            </Typography.Paragraph>
                        </Space>
                    </Card>
                </Col>
                <Col lg={span}>
                    <Card className="app-content-visitor-card" bordered={false}>
                        <Space 
                            direction="vertical" 
                            align="center"
                            className="app-content-visitor-space"
                        >
                            <img src={manage} alt="manage" />
                            <Typography.Paragraph strong>
                                Tenant management
                            </Typography.Paragraph>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
