import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header'
import Navigation from '../components/navigation/Navigation';
import Profile from '../components/NewProfile/Profile';
import ProfileAnalytics from '../components/NewProfile/ProfileAnalytics';
import RestrictedAccess from './RestrictedAccess';

const Layout = (props) => {
    const [nav, setNav] = useState(false);
    const navHandler = () => {
        nav ? setNav(false) : setNav(true)
    }
    const authStatus = useSelector((state) => state.auth);
    const mainVarient = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            },
        },
        exit: {
            x: '100vw',
            transition: {
                ease: 'easeInOut'
            },
        }
    }
    return (
        authStatus.isAuthenticated ?
            <>
                {!nav && <Header nav={navHandler} />}
                {nav && <Navigation nav={navHandler} />}
                {!nav && <motion.div variants={mainVarient} initial='hidden' animate='visible' exit='exit' className='container-fluid'>
                    <div className="row">
                        <div className="col-md-3"><Profile /></div>
                        <div className="col-md-9"><Outlet /></div>
                    </div>
                </motion.div>}
            </> : <RestrictedAccess />
    );
}

export default Layout
