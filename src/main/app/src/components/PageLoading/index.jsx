import React from 'react'
import { Spin } from 'antd'

const Loading = () => <Spin size="large"/>

export default function PageLoading() {
    return (
        <div className="app-pageLoading">
            <Loading />
        </div>
    )
}
