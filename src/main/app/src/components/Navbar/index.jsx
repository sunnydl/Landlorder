import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { Layout } from 'antd'
import NormBar from './NormBar';
import LoginBar from './LoginBar';
import { LOGOUT } from '../../types';
import decode from 'jwt-decode';

const { Header } = Layout;

export default function Navbar() {

    const profile = JSON.parse(localStorage.getItem('profile'));
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated) || profile?.isAuthenticated;
    const [user, setUser] = useState(profile);
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => { 
        dispatch({ type: LOGOUT })
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.access_token;
        if(token) {
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()){
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, user?.access_token])

    return (
        <Header className="app-header">
            <div theme="light" mode="horizontal" className="app-menu">
                <div className="app-menu-subcontainer">
                    <Link to="/"><div className="app-logo"/></Link>
                    <div className="app-menu-items">
                        {isAuthenticated ? 
                        <LoginBar
                            user={user}
                            logout={logout}
                        />
                            :
                        <NormBar
                            visible={visible}
                            setVisible={setVisible}
                        />}
                    </div>
                </div>
            </div>
        </Header>
    )
}
