import React, { useEffect } from 'react';
import { Routes, matchRoutes, useLocation, Route } from "react-router-dom"
import { AutoComplete, Layout, Menu, Space, Input, Col, Row } from 'antd';
import NavList from './NavList';
import LogoutDropdown from '../../common/LogoutDropdown';
import Dashboard from '../../views/Dashboard/Dashboard';
import Appointment from '../../views/Appointment/Appointment';
const { Search } = Input;

const { Header, Content, Footer, Sider } = Layout;
interface SideNavProps {
  list: Array<any>
}

function SideNav({ list }: SideNavProps) {
  let location = useLocation();
  console.log(location, "location ======== ");
  return (
    <Layout
      style={{ minHeight: '100vh' }}
    >
      <NavList list={list} />
      <Layout className="site-layout">
        <Header style={{ padding: '0 1rem' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
              <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{ width: '50%' }}
              // options={options}
              // onSelect={onSelect}
              // onSearch={() =>{}}
              >
                <Input.Search size="large" placeholder="" enterButton />
              </AutoComplete>
            <div>
              {/* <Badge></Badge> */}
              <LogoutDropdown />
            </div>
          </div>
        </Header>
        <Content className="site-layout-background" style={{ margin: '1rem' }}>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="appointment" element={<Appointment />} />
        </Routes>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2022 Created by Ranjit Redekar
        </Footer>
      </Layout>
    </Layout>
  );
}

export default SideNav;
