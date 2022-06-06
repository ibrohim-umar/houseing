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
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 20px;
align-items: center;
justify-content: center;
width: 1240px;
/* .alice-carousel__prev-btn-wrapper{
    display: none; //yuqolmasa !import ni qo'shamiz
} */
.alice-carousel__next-btn-item{
    display: none !important ;
}

`
export const ArrowRight = styled(FaArrowCircleRight)`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 50%;
right: -100px;
width: 45px;
height: 45px;
transform: translate(-50%, -100%);
background: white;
color: black;
border-radius: 50%;
cursor: pointer;
z-index: 999;


box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
:hover{
    opacity: 1
}
:active{
    opacity: 0.7;
}
`
export const ArrowLeft = styled(FaArrowCircleLeft)`
left: -70px;

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
top: 50%;
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