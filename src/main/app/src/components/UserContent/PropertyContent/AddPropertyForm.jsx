import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, message } from 'antd'
import { addProperty } from '../../../actions/property'

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
        props.setPropertyLoading(true);
        const formData = {
            ...values,
            ownerName: user?.sub,
        }
        console.log(formData);
        dispatch(addProperty(formData));
        props.setVisible(false);
        props.setPropertyLoading(true);
    }

    const onFailed = (errorInfo) => {
        message.error("Please enter all the required information")
    }

    return (
        <>
            <h2>Add Property</h2>
            <br />
            <br />
            <Form
                name="propertyForm"
                labelCol={labelCol}
                wrapperCol={wrapperCol}
                onFinish={submitForm}
                onFinishFailed={onFailed}
            >
                <Form.Item
                    label="Property Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your property name!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                <Form.Item
                    label="State"
                    name="state"
                    rules={[{ required: true, message: 'Please input your state!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                <Form.Item
                    label="Country"
                    name="country"
                    rules={[{ required: true, message: 'Please input your country!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                <Form.Item
                    label="Street Address"
                    name="streetAddress"
                    rules={[{ required: true, message: 'Please input your property\'s street address!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                <Form.Item
                    label="Zip Code"
                    name="zipCode"
                    rules={[{ required: true, message: 'Please input your zip code!' }]}
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
        </>
    )
}
