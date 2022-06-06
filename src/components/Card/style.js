import styled from 'styled-components'



export const Container = styled.div`
display: flex;
position: relative;
height:fit-content;
flex-direction: column;
max-width: 380px;
min-width: 280px;
background: #ffffff;
border: 1px solid #e6e9ec;
border-bottom: none;
border-radius: 3px;
margin-right: ${({mr}) => mr && `${mr}px` };
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
height: 500px;


:hover{
   transform: scale(105%);
   
   
   
   transition: 0.5s ;
  
}
`
export const Img = styled.img`
min-height: 220px;
max-height: 220px;
width: 100%;
`
export const InfoWrapper = styled.div`
display: flex;

flex-direction: column;
padding: 25px;
padding-bottom: 0;
border-top: 1px solid #e6e9ec;
`
export const Info = styled.div`
display: flex;
height: 150px;
justify-content: space-between;
padding: 16px 0;

`
Info.Detail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 18px;

`
export const Icons =styled.div`
cursor: pointer;
`
Icons.Img = styled.img`
font-size: 30px;
/* width: 30px; */
height: 30px;
`



export const Footer = styled.div`
display: flex;
border-top: 1px solid #e6e9ec ;
border-bottom: 1px solid #e6e9ec ;
padding: 0 20px;
height: 50px;
font-size: 25px;
align-items: center;
padding-bottom: 10px;


`
export const FooterIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
gap: 20px;
`
export const User = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
width: 46px;
height: 46px;
right: 16px;
top: 35%;
border-radius: 50px;
background: #ffffff;
box-shadow: 0px 0px 10px rgba(13,38,59,0.2);
overflow: hidden;
`
User.Img = styled.img`
width: 43px;
height: 43px;
object-fit: cover;
`