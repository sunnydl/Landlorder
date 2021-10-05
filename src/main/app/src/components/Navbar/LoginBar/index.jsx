import React from 'react'
import { useHistory } from 'react-router';
import { Button, Avatar } from 'antd';

export default function LoginBar(props) {

    const history = useHistory();

    const goToDashboard = () => {
        history.push('/dashboard');
    }

    return (
        <>  
            <div/>
            <Button 
                type="link" 
                className="app-menu-item-user"
                onClick={goToDashboard}
            >
                <Avatar size="large" className="app-auth-avatar" gap={1}>
                    {props.user?.name?.charAt(0).toUpperCase()}
                </Avatar>
                &nbsp;&nbsp;{props.user?.name}
            </Button>
            <Button type="link" className="app-menu-item" onClick={props.logout}>Log out</Button>
        </>
    )
}
