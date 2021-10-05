import React from 'react'
import { Layout, Divider, Card } from 'antd'
import UserProfile from './UserProfile/UserProfile';
import PropertyContent from './PropertyContent/PropertyContent';

const { Content } = Layout;

export default function UserContent() {
    return (
        <Content className="app-content app-content-user">
            <Card className="app-content-user-card">
                <UserProfile />
                <Divider>Properties</Divider>
                <PropertyContent/>
            </Card>
        </Content>
    )
}
