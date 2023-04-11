import React from 'react';
import { AutoComplete, Layout, Menu, Space, Input, Col, Row } from 'antd';
import NavList from './NavList';
import LogoutDropdown from '../../common/LogoutDropdown';
const { Search } = Input;

const { Header, Content, Footer, Sider } = Layout;
interface SideNavProps {
  list: Array<any>
}

function SideNav({ list }: SideNavProps) {
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
                <Input.Search size="large" placeholder="input here" enterButton />
              </AutoComplete>
            <div><LogoutDropdown /></div>
          </div>
        </Header>
        <Content style={{ margin: '1rem' }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
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