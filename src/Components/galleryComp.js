import { Carousel } from 'antd';

const contentStyle = {
    backgroundImage: "./images/2R5A1001.jpg",
    height: '300px',
    wighth: '100%',
    objectFit: 'fill'
  };

function IndividualIntervals() {
  return (
    <Carousel autoplay effect="fade">
            <div style={contentStyle}>
                <img src="./images/2R5A1001.jpg" alt="" style={contentStyle}/>
            </div>
            <div>
                <img src="./images/2R5A1007.jpg" alt="" style={contentStyle}/>
            </div>
            <div>
                <img src="./images/2R5A1052.jpg" alt="" style={contentStyle}/>
            </div>
    </Carousel>
  );
}

export default IndividualIntervals;