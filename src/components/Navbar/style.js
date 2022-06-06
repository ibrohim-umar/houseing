import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


 
const Wrapper = styled.div`
 display: flex;
 width: 100%;
 flex-direction: column;
`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: var(--primeryColor);

-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

`
const NavbarWrapper = styled.div`
display: flex;
align-items: center;

width: 100%;
height: 64px;
max-width: 1440px;
font-size: 16px;
line-height: 24px;
font-weight: 400;
font-style: normal;
font-family: 'Montserrat';
color: #fff;
padding-left: 10px;
padding-right: 10px;
`
const NavbarBody = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
color: white;
&:hover{
    color: white;
}
.active{
    color: cadetblue ;  //parentga berilishi kerak
}
`
const Link = styled(NavLink)`
color: white;
font-weight: 400;
font-size: 18px;
line-height: 24px;
font-style: normal;
text-decoration: none;
margin: 0 32px;
`
const Logo = styled.div`
display: flex;
align-items: center;
cursor: pointer;

`


Logo.Title = styled('div')`
font-size: 20px;
font-weight: 500px;
margin-left: 11px;
`;
const Body = styled.div`
display: flex;
width: 100%;
`



export {Wrapper,Container, Body, NavbarWrapper,NavbarBody,Link, Logo }