import React,{useRef} from 'react'
import { Arrow, ArrowLeft, ArrowRight, Container, Img} from './style'
import Uy from '../../../assets/uy.png'
import Uy2 from '../../../assets/uy2.png'
// import Left from '../../../assets/left.png'
// import  Right from '../../../assets/right.png'

 
const Carusel = () => {
    const slider = useRef()
  return (
      <>
      <Arrow>
      
       <ArrowLeft  onClick={()=> slider.current.prev()} >  </ArrowLeft>
       <ArrowRight   onClick={()=> slider.current.next()} >  </ArrowRight>
      </Arrow>
    
   <Container dots autoplay ref={slider} >
   
    <Img src={Uy} />
    <Img src={Uy2} />
    
   </Container>
      </>
      
  )
}

export default Carusel