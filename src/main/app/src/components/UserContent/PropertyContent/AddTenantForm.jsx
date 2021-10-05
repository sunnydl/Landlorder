import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, message } from 'antd'
import { addTenant } from '../../../actions/tenant'

const labelCol = {
    span: 8
}
const wrapperCol = {
    span: 16
}

export default function AddPropertyForm(props) {

    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const submitForm = async(values) => {
        props.setTenantLoading(true);
        const formData = {
            ...values,
            ownerName: user?.sub,
            propertyName: props?.property?.name,
        }
        console.log(formData);
        dispatch(addTenant(formData));
        props.setVisible(false);
        props.setTenantLoading(true);
    }

    const onFailed = (errorInfo) => {
        message.error("Please enter all the required information")
    }

    return (
        <div className="app-Form">
            <h2>Add Tenant</h2>
            <br />
            <br />
            <Form
                name="tenantForm"
                labelCol={labelCol}
                wrapperCol={wrapperCol}
                onFinish={submitForm}
                onFinishFailed={onFailed}
            >
                <Form.Item
                    label="Tenant Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input name!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[{ required: true, message: 'Please input email!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                    rules={[{ required: true, message: 'Please input phone number!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                <Form.Item
                    label="Rent Amount"
                    name="rentAmount"
                    rules={[{ required: true, message: 'Please input rent amount!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Button type="primary" htmlType="submit">Add</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
