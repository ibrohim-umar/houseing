import styled from 'styled-components'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'



export const Container = styled.div`
display: flex;
width: 100%;
margin-top: 96px;
flex-direction: column;
height: 100vh;
text-align: center;

`
export const Wrapper=styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: center;
margin-top: 32px;



`
export const Carousel = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 20px;
align-items: center;
justify-content: center;
width: 1240px;



.alice-carousel__next-btn-item{
    display: none !important ;
}

`
export const ArrowRight = styled(FaArrowCircleRight)`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 44%;
right: -70px;
width: 45px;
height: 45px;
transform: translate(-50%, -100%);
background: white;
color: black;
border-radius: 50%;
cursor: pointer;
z-index: 999;
padding-left: 0px;
padding-right: 10px;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
:hover{
    opacity: 1
}
:active{
    opacity: 0.7;
}
`
export const ArrowLeft = styled(FaArrowCircleLeft)`
left: -28px;

padding-left: 10px;
padding-right: 0;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
:hover{
    opacity: 1
}
:active{
    opacity: 0.7;
}
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 44%;
right: 20px;
width: 45px;
height: 45px;
transform: translate(-50%, -100%);
background: white;
color: black;
border-radius: 50%;
cursor: pointer;
z-index: 999;
`
export const CategoryWrapper =styled.div`
display: flex;
position: relative;
width: 280px;
max-width: 280px;
height: 350px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(.jpg);
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
border-radius: 20px;
gap: 20px;
cursor: pointer;

`
export const Details =styled.div`
position: absolute;
width: 59px;
height: 28px;
text-align: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
align-items: center;
justify-content: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #FFFFFF;
`
export const Img =styled.img`
width: 280px;
height: 350px;

background: white;
`