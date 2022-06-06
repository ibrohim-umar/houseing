import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {navbar} from '../../utils/navbar'
import { Body, Container, NavbarWrapper, Wrapper, NavbarBody, Link , Logo} from './style'
import Button from '../../pages/Generic/Button/index'
import Icon from '../../assets/Vector (8).png'
// import Filter from '../Filter/index'


const Navbar = () => {
    const navigate = useNavigate()
  return (
      <>
    <Wrapper>
        <Container>
          <NavbarWrapper>
             <Logo  onClick={()=> navigate('/home')} >
                 <img src={Icon} alt="" />
                
                 <Logo.Title> Houzing </Logo.Title>
             </Logo>
          <NavbarBody>
              {navbar.map(({title, id, path, hidden}) => {
                  return(  !hidden && (
                      <Link 
                     
                       key={id} to={path} >{title}</Link>  
                  ))
              } )}
          </NavbarBody>
          
              <Button  onClick={() => navigate('/signin')}  type={'secondry'} width={'120px'} >  Login </Button>
          
          </NavbarWrapper>
        </Container>
        <Body>
            <Outlet/>
        </Body>

    </Wrapper>
    {/* <Filter/> */}
    </>
  )
}

export default Navbar