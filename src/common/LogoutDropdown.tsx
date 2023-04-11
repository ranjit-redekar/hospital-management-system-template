import React from 'react';
import { DownOutlined, UserOutlined, LogoutOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Avatar } from 'antd';

const menu = (
  <Menu
    items={[
      {
        label: 'Profile',
        key: '1',
        icon: <ProfileOutlined />,
      },
      {
        label: 'Settings',
        key: '2',
        icon: <SettingOutlined />,
      },
      {
        type: 'divider',
      },
      {
        label: 'Sign out',
        key: '3',
        icon: <LogoutOutlined />,
      },
    ]}
  />
);

const LogoutDropdown = () => (
  // <>
  <Dropdown overlay={menu} trigger={['click']}>
    {/* <a onClicke) => e.preventDefault()}> */}
    {/* <Space> */}
    <Avatar icon={<UserOutlined />} />
    {/* </Space> */}
  </Dropdown>
  // </>
);

export default LogoutDropdown;