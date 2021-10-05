import React from 'react'
import { useSelector } from 'react-redux'
import { Space, Typography } from 'antd'
import landlord from '../../../assets/landlord.png'

export default function UserProfile() {

    const authUser = useSelector(state => state.auth.authData);
    const localUser = JSON.parse(localStorage.getItem('profile'));
    const user = authUser? authUser:localUser;

    return (
        <div 
            className="app-content-user-userProfile"
            align="center"
        >
            <Space direction="horizontal" size={100}>
                <img src={landlord} alt="landlord" />
                <Space direction="vertical">
                    <Space direction="horizontal">
                        <Typography.Text strong>
                            Name:
                        </Typography.Text>
                        <Typography.Text>{user? user?.name:'No Name Data'}</Typography.Text>
                    </Space>
                </Space>
            </Space>
        </div>
    )
}
