
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  ReadOutlined,
  StarOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Sider } = Layout;
function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem('Homepage', '/', <DesktopOutlined />),
  getItem('Assignment', '/Assignments', <ReadOutlined />),
  getItem('Files', '9', <FileOutlined />),
];


function SideMenu(props) {
    const [collapsed, setCollapsed] = useState(true);
    
    return (
        <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="light" selectedKeys={props.selectedKeys} mode="inline">
            {
                items.map((item) => (
                    <Menu.Item key={item[0]}>
                        <NavLink key={`link${item[0]}`} to={item[0]}>{item[2]}</NavLink>
                    </Menu.Item>
                )

                )
            }
        </Menu>
      </Sider>
    );
  }
  export default SideMenu;
