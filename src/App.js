import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  ReadOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Home from "./pages/Home";
import Assignments from './pages/Assignments';
import Gallery from './pages/Gallery';
const { Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Homepage', '/', <DesktopOutlined />),
  getItem('Hobbies', '/Hobbies', <StarOutlined />, [
    getItem('Photography', '/Photography'),
    getItem('Watercolor', '4'),
  ]),
  getItem('Assignments', '/Assignments', <ReadOutlined />),
  getItem('Team', 'sub2', <StarOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState(['/']);

  const location = useLocation();
  
  useEffect(() => {
      setSelectedKeys([location.pathname]);
  }, [location]);

  const navigate = useNavigate();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu theme="light" selectedKeys={selectedKeys} mode="inline" items={items} onClick={(e) => navigate(e.key)}/>
      </Sider>
      <Layout className="site-layout">

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Assignments" element={<Assignments />} />
            <Route path="/Photography" element={<Gallery />} />
          </Routes>
       
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;