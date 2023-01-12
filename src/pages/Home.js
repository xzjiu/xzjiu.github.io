import React from 'react'
import { Layout, theme, Col, Row, Timeline} from 'antd';
import TimelineItem from 'antd/es/timeline/TimelineItem';
const { Content} = Layout;

function Home() {
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
              background: colorBgContainer,
            }}
          >
            <Row>
                <Col span={24}>
                    <center>
                    <h2>Zou, Xinrui</h2>
                    </center>
                </Col>
            </Row>
            <Row>
                <Col span={2}></Col>
                <Col span={20}>
                <h3> Professional Experience </h3>
                <Timeline>
                    <TimelineItem>
                        <h3> May 2022 - Aug. 2022</h3>
                        <p><b>Amazon.com, Inc.</b> Software Development Engineer Intern</p>
                        <p>Provided a responsive, interactive Typescript-React frontend for
                             displaying the processed data from AWS S3 with functions of highlighting, searching and grouping.</p>
                        <p>Implementd a frontend tool capable of integrating and visualizing the
                             delivery transporter activities extracted from the activity logs of different services, in cooperation with different teams.</p>
                        <p>Developed a Kotlin based backend service that capable to collect and process 10M+ Amazon
                             delivery log data. The service can increase issue fixing efficiency by 50% and cooperate with AWS.</p>
                    </TimelineItem>
                    <TimelineItem>
                        <h3> Dec. 2020 – Mar. 2021</h3>
                        <p><b>Shenzhen Etop Information Co., Ltd</b> Software Development Engineer Intern</p>
                        <p>Built 6 frontend interactions for the Geographic
                             Information System (GIS) used in a virtual city tour by using Node.js and Vue.js.</p>
                        <p>Imported and optimized Shenzhen city digital model to GIS system using Cesium and CityEngine and used
                             WebGL to enhance lighting effect of the building and the flowing effect of water.</p>
                    </TimelineItem>
                    <TimelineItem>
                        <h3> Oct. 2020 – Nov. 2020</h3>
                        <p><b>Chengdu Chaoyouai Technology Co., Ltd (Baicizhan)</b> Product Manager Intern</p>
                        <p>· Produced high-fidelity prototypes using Axure and conducted
                             user research which summarized 20+ iteration points.</p>
                        <p>2 new ways of interaction are provided to English learning apps: conversation fill-in-the-blank and live video lectures. The
new features increased paying users by 19% and attracted 80% of short-term users to long-term users.</p>
                    </TimelineItem>
                </Timeline>
                </Col>
                <Col span={2}></Col>
            </Row>
           
          </div>
        </Content>
      </>
    );
  }
  export default Home;
