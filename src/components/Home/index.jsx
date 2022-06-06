import React from 'react'
import { Container } from './style'
import Filter from '../Filter'
import Carusel from './Carusel'
import Recommended from '../Recommended'
import Categories from './Categories'


const Home = () => {
  return (
   <Container>
     <Filter/>
     <Carusel/>
     <Recommended/>
     <Categories/>
   </Container>
  )
}

export default Home