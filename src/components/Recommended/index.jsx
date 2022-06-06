import React from 'react'
import Card from '../Card/index'
import { ArrowRight,Carousel, ArrowLeft, Container, Wrapper } from './styled'
import AliceCarousel from 'react-alice-carousel'

import { useRef } from 'react'


const Recommended = () => {
  const items = [
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
     
  ]
  const slider =useRef()
  return (
    <Container>
      <div className="title center">Recommended</div>
      <div className="description center ">Siz Orzu qilgan, Siz izlagan shinam va arzon uylar.</div>
        
        <Wrapper  >
          <Carousel>
          <AliceCarousel ref={slider}  autoWidth items={items} />
          </Carousel>
          
          <ArrowRight  onClick={()=> slider.current?.slideNext()}  />
          <ArrowLeft  onClick={()=> slider.current?.slidePrev()}  />
        </Wrapper>
    </Container>
  )
}

export default Recommended