import React from 'react'
import { Layout, theme} from 'antd';
const { Content} = Layout;

function Assignments() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
      <>
         <Content
          style={{
            margin: '16px 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            assignment is a cat.
          </div>
        </Content>
      </>
    );
  }
  export default Assignments;