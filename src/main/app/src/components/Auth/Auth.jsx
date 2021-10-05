import React, { useState } from 'react'
import { Modal, Spin } from 'antd'
import AuthForm from './AuthForm'

export default function Auth(props) {

    const [authLoading, setAuthLoading] = useState(false);

    const closeModal = () => {
        setAuthLoading(false);
        props.setVisible(false);
    }

    return (
        <Modal
            visible={props.visible}
            footer={null}
            onOk={() => props.setVisible(false)}
            onCancel={closeModal}
            centered
            bodyStyle={{ backgroundColor: "burlywood" }}
        >
            <Spin spinning={authLoading} tip="Loading...">
                <AuthForm setVisible={props.setVisible} setAuthLoading={setAuthLoading}/>
            </Spin>
        </Modal>
    )
}
