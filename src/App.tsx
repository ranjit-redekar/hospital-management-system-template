import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import SideNav from './Layouts/SideNav/SideNav';


function getItem(label: String, key: String, icon?: any, children?: Array<any>): Object {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items: any[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {

  return (
    <SideNav list={ items } />
  );
};

export default App;