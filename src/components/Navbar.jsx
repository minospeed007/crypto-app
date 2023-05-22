import React from 'react'
import {Menu, Button, Avatar,Typography} from 'antd'
import {Link, Routes } from 'react-router-dom'
import {HomeOutlined,FundOutlined, MoneyCollectOutlined, BulbOutlined,MenuOutlined,}from '@ant-design/icons'
import icon from '../images/cryptocurrency.png';

const Navbar=()=>{
    return (<>
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size='large' />
            <Typography.Title level={2} className='logo'>
            
                
            <Link to='/'>cryptoverse</Link>
                
            </Typography.Title>

            <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}> 
        <Link to='/'>Home</Link>
</Menu.Item>
            
            <Menu.Item icon={<FundOutlined/>}>
            <Link to='/cryptocurrency'>Cryptocurrency</Link>

            </Menu.Item>
            
            <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to='/exchanges'>Exachanges</Link>

            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
            <Link to='/news'>News</Link>

            </Menu.Item>
            </Menu>
        </div>
    </div>

    </>)

}
export default Navbar