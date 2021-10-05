import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProperties } from '../../../actions/property';
import { Button, Typography, Row, Col, Modal, Spin, Card, Popover, Space } from 'antd'
import AddPropertyForm from './AddPropertyForm'
import TenantList from './TenantList';
import house from '../../../assets/houseProperty.png'

export default function PropertyContent() {

    const lg = 8;
    const xs = 12;
    const dispatch = useDispatch();

    const username = JSON.parse(localStorage.getItem('profile'))?.sub;

    useEffect(() => {
        dispatch(getProperties());
    }, [username, dispatch])

    const properties = useSelector(state => state.property);
    const [propertyVisible, setPropertyVisible] = useState(false);
    const [propertyLoading, setPropertyLoading] = useState(false);

    const closePropertyModal = () => {
        setPropertyLoading(false);
        setPropertyVisible(false);
    }

    return (
        <div className="app-content-property">
            <Button onClick={() => setPropertyVisible(true)}>Add Property</Button>
            <br /><br />
            <Modal
                visible={propertyVisible}
                footer={null}
                onOk={() => setPropertyVisible(false)}
                onCancel={closePropertyModal}
                centered
                bodyStyle={{ backgroundColor: "burlywood" }}
            >
                <Spin spinning={propertyLoading} tip="Adding...">
                    <AddPropertyForm
                        setVisible={setPropertyVisible}
                        setPropertyLoading={setPropertyLoading}
                    />
                </Spin>
            </Modal>
            <Row gutter={[16, 16]}>
                {properties.map((property) => (
                    <Col lg={lg} xs={xs} key={property?.id}>
                        <Popover
                            placement="rightTop"
                            trigger="click"
                            zIndex={800}
                            content={<TenantList property={property} />}
                        >
                            <Card 
                                hoverable
                                bordered={false}
                            >
                                <Space direction="horizontal">
                                    <img src={house} alt="houseProperty" />
                                    <Space direction="vertical">
                                        <Space direction="horizontal">
                                            <Typography.Text strong>Name: </Typography.Text>
                                            <Typography.Text>{property.name}</Typography.Text>
                                        </Space>
                                        <Space direction="horizontal">
                                            <Typography.Text strong>Country: </Typography.Text>
                                            <Typography.Text>{property.country}</Typography.Text>
                                        </Space>
                                        <Space direction="horizontal">
                                            <Typography.Text strong>State: </Typography.Text>
                                            <Typography.Text>{property.state}</Typography.Text>
                                        </Space>
                                        <Space direction="horizontal">
                                            <Typography.Text strong>Address: </Typography.Text>
                                            <Typography.Text>{property.streetAddress}</Typography.Text>
                                        </Space>
                                        <Space direction="horizontal">
                                            <Typography.Text strong>Zip Code: </Typography.Text>
                                            <Typography.Text>{property.zipCode}</Typography.Text>
                                        </Space>
                                    </Space>
                                </Space>
                            </Card>
                        </Popover>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
