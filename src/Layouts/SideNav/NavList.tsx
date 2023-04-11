import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

interface NavListProps {
    list: Array<any>
}

function NavList({ list }: NavListProps) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu theme="dark" subMenuCloseDelay={0} defaultSelectedKeys={['1']} mode="inline" items={list} />
        </Sider>
    );
}

export default NavList;