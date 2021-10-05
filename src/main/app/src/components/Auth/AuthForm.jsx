import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, message } from 'antd'
import { login, register } from '../../actions/auth'
import authState from '../../enums/AuthState'
import FormData from 'form-data'

const labelCol = {
    span: 8
}
const wrapperCol = {
    span: 16
}

export default function AuthForm(props) {

    const [mode, setMode] = useState(authState.LOGIN);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitForm = async(values) => {
        props.setAuthLoading(true);
        console.log(values);
        try {
            if(mode===authState.LOGIN) {
                const formData = new FormData();
                formData.append('username', values.username);
                formData.append('password', values.password);
                dispatch(login(formData, history, message));
                props.setAuthLoading(false);
                props.setVisible(false);
            } else if(mode===authState.REGISTER) {
                await register(values, message);
                props.setAuthLoading(false);
                setMode(authState.LOGIN);
            }
        } catch (err) {
            console.log(err);
            message.error(err.message);
            props.setAuthLoading(false);
        }
    }

    const onFailed = (errorInfo) => {
        message.error("Please enter all the required information")
    }

    const switchToRegister = () => {
        setMode(authState.REGISTER);
    }

    const switchToLogin = () => {
        setMode(authState.LOGIN)
    }

    return (
        <>
            <h2>{mode}</h2>
            <br />
            <br />
            <Form
                name="authForm"
                labelCol={labelCol}
                wrapperCol={wrapperCol}
                onFinish={submitForm}
                onFinishFailed={onFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>
                {mode===authState.REGISTER && <Form.Item
                    label="FullName"
                    name="fullName"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                >
                    <Input
                        className="app-Form-input"
                    />
                </Form.Item>}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input.Password className="app-Form-input"/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    {mode===authState.LOGIN && <Button type="primary" htmlType="submit">Sign in</Button>}
                    {mode===authState.REGISTER && <Button type="primary" htmlType="submit">Sign up</Button>}
                    {mode===authState.LOGIN && <Button type="text" onClick={switchToRegister}>Don't have an account?</Button>}
                    {mode===authState.REGISTER && <Button type="text" onClick={switchToLogin}>Already have an account?</Button>}
                </Form.Item>
            </Form>
        </>
    )
}
