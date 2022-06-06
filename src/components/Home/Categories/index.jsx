import React, { useState } from 'react'
// import Card from '../../Card/index'
import { ArrowRight,Carousel, ArrowLeft, Container, Wrapper, CategoryWrapper, Img, Details } from './styled'
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query'
import { useRef } from 'react'
import Uy from '../../../assets/uy.png'
import { useNavigate } from 'react-router-dom'


const {REACT_APP_BASE_URL : url} = process.env;


const Category = ({value}) => {

  const navigate = useNavigate()
  const goto = () => {
    navigate(`/properties?category_id=${value?.id}`)
  }

  return <CategoryWrapper onClick={goto} > 
       <Img src={Uy} />
       <Details>  {value?.name} </Details>
   </CategoryWrapper>
}

const CategoriesComponent = () => {

const [list, setList] =useState([])
  
  

  const slider = useRef()

  useQuery('', () => {
    return fetch(`${url}/v1/categories/list`).then((res) => res.json());
  },
  {
    onSuccess:(res) => {
      console.log(res, 'res');
      let response =res?.data?.map((value)=> (
        
           <Category key={value.id} value={value}   />
        
      
      ))
      setList(response || [] )
    },
  }
  );

  
  return (
    <Container>
      <div className="title center">Categories</div>
      <div className="description center ">Siz Orzu qilgan, Siz izlagan shinam va arzon uylar.</div>
        
        <Wrapper  >
          <Carousel>
          <AliceCarousel ref={slider}  autoWidth items={list} />
          </Carousel>
          
          <ArrowRight  onClick={()=> slider.current?.slideNext()}  > &lang; </ArrowRight>
          <ArrowLeft  onClick={()=> slider.current?.slidePrev()}  >&lang;</ArrowLeft>
        </Wrapper>
    </Container>
  )
}

export default CategoriesComponent