import styled from 'styled-components'
import  {Carousel} from 'antd'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'




export const Container = styled(Carousel)`
width: 100%;
position: relative;
margin-top: 10px;
height: fit-content;
`
export const Img = styled.img`
background: black;
width: 100%;
height: 570px;
`
export const Arrow = styled.div`
font-size: 20px;
`
export const ArrowRight =styled(FaArrowCircleRight)`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 50%;
color: red;
right: 10%;
width: 45px;
height: 45px;
border-radius: 50%;
z-index: 999;
background: gray;
color: white;
cursor: pointer;
`
export const ArrowLeft =styled(FaArrowCircleLeft)`
position: absolute;
cursor: pointer;

font-weight: 100;
font-size: 3px;
display: flex;
align-items: center;
justify-content: center;
top: 50%;
left: 10%;
width: 45px;
height: 45px;
border-radius: 50%;
z-index: 999;
background: gray;
color: white;
cursor: pointer;
`

