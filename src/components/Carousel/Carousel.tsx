import React from 'react';
import { Carousel } from 'antd';
import img1 from '../../assets/hospital1.png';
import img2 from '../../assets/5d605ab59f420.webp'
import img3 from '../../assets/descarga.jpg'
import style from'./Carousel.module.css';
import styled from "styled-components";


// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
  
// };

const CarouselComp: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide); 
    };
    
    return (
      <div className={style.container}>
      <Carousel autoplaySpeed={6000} autoplay={true} dotPosition="bottom"
      style={{ width: '100%', height: '100%' }}>
          
      <div className={style.itemSlider}>
          {item(img1, "Imagen1")}
      </div>
      <div className={style.itemSlider}>
          {item(img2, "Imagen2")}
      </div>
      <div className={style.itemSlider}>
          {item(img3, "Imagen3")}
      </div>
    </Carousel>
    </div>
  );

  
};

const item = (image: string, imageName: string) => {
  return <StyleItem>
     {/* <div className="text">
            <h1>{text}</h1>
        </div> */}
      
      <div className="img">
          <img src={image} alt={imageName} />
      </div>        
  </StyleItem>
}

const StyleItem = styled.div`
  display: flex;
  flex-wrap: nowrap; 
  width: 100%;
  margin-top:4%;
  .img{
      width: 100%; 
      height: 100%;
      img{
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
    }
    /* .text{
        width: 30%;
    } */

  
  
 
`


export default CarouselComp;