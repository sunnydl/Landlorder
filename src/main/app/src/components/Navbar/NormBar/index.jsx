import React from 'react'
import { Button } from 'antd'
import Auth from '../../Auth/Auth'

export default function NormBar(props) {
    return (
        <>
            <Button 
                className="app-menu-item"
                onClick={() => props.setVisible(!props.visible)}
                type="link"
            >Login/Register</Button>
            <Auth
                visible={props.visible}
                setVisible={props.setVisible}
            />
            <Button type="link" className="app-menu-item">About</Button>
            <Button type="link" className="app-menu-item">Contact</Button>
        </>
    )
}
