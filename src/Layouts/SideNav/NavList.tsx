import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { redirect, useNavigate  } from 'react-router-dom';
const { Sider } = Layout;

interface NavListProps {
    list: Array<any>
}

function NavList({ list }: NavListProps) {
    const navigate = useNavigate();
    console.log(list, '===========list');
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu theme="dark" subMenuCloseDelay={0} onClick={e => navigate(e.key)} defaultSelectedKeys={['1']} mode="inline" items={list} />
        </Sider>
    );
}

export default NavList;