import React from 'react'
import { Layout } from 'antd'
import ContentShowCase from './ContentShowCase';
import ShowCase from '../showCase'

const { Content } = Layout;

export default function VisitorContent() {
    return (
        <>
            <ShowCase/>
            <Content className="app-content">
                <ContentShowCase/>
            </Content>
        </>
    )
}
