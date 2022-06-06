import styled from 'styled-components'


const Container  = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;

width: 100%;
`
const Wrapper = styled.div`
display: flex;
width: 1220px;

padding-left: 100px;
`
const Icon = styled.div`

`
Icon.Home =styled.img`
margin-right: 8px;
margin-top: 1px;
`

const Advanced = styled.div`
width: 'fit-content';
height: 'fit-content';
background: #ffffff;
border-radius: 5px;
padding: 10px;
`
Advanced.Title = styled.div`
font-style: normal;
font-size: 16px;
font-weight: 600;
color: #0d263b;
`
const Section = styled.div`
display: flex;
margin-bottom: 15px;
justify-content: flex-end;
gap: 20px;
`





export {Container,Wrapper,Icon,Advanced, Section}