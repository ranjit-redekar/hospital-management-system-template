import React from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

export const NavbarItems = [
    {
        "label": "Dashboard",
        "key": "/dashboard",
        "icon": <PieChartOutlined />
    },
    {
        "label": "Appointment",
        "key": "/appointment",
        "icon": <DesktopOutlined />
    },
    {
        "label": "User",
        "key": "/user",
        "icon": <UserOutlined />,
        "children": [
            {
                "label": "User1",
                "key": "/user1",
                "icon": <UserOutlined />,
            },
            {
                "label": "User2",
                "key": "/user2",
                "icon": <UserOutlined />,
            },
            {
                "label": "User3",
                "key": "/user3",
                "icon": <UserOutlined />,
            }
        ]
    },
    {
        "label": "Team",
        "key": "/team",
        "icon": <TeamOutlined />,
        "children": [
            {
                "label": "Team1",
                "key": "/team1",
                "icon": <TeamOutlined />,
            },
            {
                "label": "Team2",
                "key": "/team2",
                "icon": <TeamOutlined />,
            },
            {
                "label": "Team3",
                "key": "/team3",
                "icon": <TeamOutlined />,
            }
        ]
    },
    {
        "label": "Files",
        "key": "/files",
        "icon": <FileOutlined />
    }
];
