import React from 'react'
import { Layout, theme, Image, Row, Col} from 'antd';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import IndividualIntervals from '../Components/galleryComp';
const { Content} = Layout;

const images = [
    "./images/2R5A1001.jpg",
    "./images/2R5A1007.jpg",
    "./images/2R5A1032.jpg",
    "./images/2R5A1041.jpg",
    "./images/2R5A1052.jpg",
]



function Gallery() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

      const contentStyle = {
        padding: 24,
        minHeight: 360,
        
        marginTop: 50,
        background: colorBgContainer
      };
    return (
      <>
         <Content
          style={{
            margin: '16px 16px',
          }}
        >
          
            <Row>
                <Col span={10} >
                    <div style={{...contentStyle, marginRight: 20}}>
                    <h2>Gallery</h2>
                    <p style={{fontFamily: 'Courier New', fontSize:18}}>“Actually, I’m not all that interested in the subject of photography.
                     Once the photo is in the box, I’m not all that interested in what happens next. Hunters, after all, aren’t cooks.”</p>
                    <p style={{fontFamily: 'Courier New', fontSize:18}}>– Henri Cartier-Bresson</p>
                    </div>
                </Col>
                <Col span={14} >
                    <div style={contentStyle}>
                    <h2>Gallery</h2>
                    </div>
                
                </Col>
            </Row>

            <div
            style={{
              padding: 24,
              minHeight: 360,
              marginTop: 20,
              background: colorBgContainer,
            }}
          >
                <ResponsiveMasonry
                columnsCountBreakPoints={{350:1, 750:2, 1000:3, 1500:4}}
            >
                <Masonry>
                {images.map((image, i) => (
                        <Image
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", padding:5}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            
          </div>
        </Content>
      </>
    );
  }
  export default Gallery;