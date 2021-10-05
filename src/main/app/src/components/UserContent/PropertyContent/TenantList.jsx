import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Space, Typography, Button, Modal, Spin, Popconfirm } from 'antd'
import tenantPic from '../../../assets/tenant.png'
import AddTenantForm from './AddTenantForm'
import { deleteProperty } from '../../../actions/property'

export default function TenantList(props) {

    const dispatch = useDispatch();

    const property = props.property;
    const tenants = property?.tenants;
    const [tenantLoading, setTenantLoading] = useState(false);
    const [tenantVisible, setTenantVisible] = useState(false);

    const clickAddTenant = () => {
        setTenantVisible(true);
    }

    const closeTenantModal = () => {
        setTenantLoading(false);
        setTenantVisible(false);
    }

    const onDelete = () => {
        dispatch(deleteProperty(property.id));
    }

    return (
        <div>
            {tenants?.map((tenant) => (
                <Card bordered={false} key={tenant?.id}>
                    <Space direction="horizontal">
                        <img src={tenantPic} alt="tenantPic" />
                        <Space direction="vertical">
                            <Space direction="horizontal">
                                <Typography.Text strong>Name: </Typography.Text>
                                <Typography.Text>{tenant?.name}</Typography.Text>
                            </Space>
                            <Space direction="horizontal">
                                <Typography.Text strong>Email: </Typography.Text>
                                <Typography.Text>{tenant?.email}</Typography.Text>
                            </Space>
                            <Space direction="horizontal">
                                <Typography.Text strong>Phone Number: </Typography.Text>
                                <Typography.Text>{tenant?.phoneNumber}</Typography.Text>
                            </Space>
                            <Space direction="horizontal">
                                <Typography.Text strong>Rent Amount: </Typography.Text>
                                <Typography.Text>{tenant?.rentAmount}</Typography.Text>
                            </Space>
                        </Space>
                    </Space>
                </Card>
            ))}
            <Space direction="vertical">
                <Button onClick={clickAddTenant} type="primary">Add New Tenant</Button>
                <Popconfirm
                    placement="bottomLeft"
                    title="Are you sure you want to delete this property?"
                    onConfirm={onDelete}
                    okText="Delete"
                    cancelText="Cancel"
                >
                    <Button type="primary" danger>Delete this property</Button>
                </Popconfirm>
            </Space>
            <Modal
                visible={tenantVisible}
                footer={null}
                onOk={() => setTenantVisible(false)}
                onCancel={closeTenantModal}
                centered
                bodyStyle={{ backgroundColor: "burlywood" }}
            >
                <Spin spinning={tenantLoading} tip="Adding...">
                    <AddTenantForm
                        setVisible={setTenantVisible}
                        setTenantLoading={setTenantLoading}
                        property={property}
                    />
                </Spin>
            </Modal>
        </div>
    )
}
