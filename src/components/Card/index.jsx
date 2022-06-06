import React from 'react'
import {Container, Img, Info, InfoWrapper,Icons, Footer, User, FooterIcon} from './style'
import Uy2 from '../../assets/uy2.png'
import Bed from '../../assets/card/Bed.png'
import Bath from '../../assets/card/Vector (15).png'
import Garage from '../../assets/card/Vector (16).png'
import Liner from '../../assets/card/Vector (17).png'
import Heard from '../../assets/card/Vector (18).png'
import Resize from '../../assets/card/resize 1.png'
import UserPhoto from '../../assets/card/user.jpg'


const Card = ({info,mr, onClick}) => {
  return (
    <Container mr={mr} onClick={onClick} >

       <Img  src={info?.attachments[0]?.imgPath || Uy2} />
       <InfoWrapper>
      <User>
        <User.Img src={info?.attachments[0]?.imgPath || UserPhoto} />
      </User>
         <div style={{whiteSpace: 'nowrap', overflow:'hidden'}} className="subtitle">
            {info?.description} </div>
         <div className="description" style={{whiteSpace: 'nowrap', overflow:'hidden'}} >
           {info?.name || 'house'}, {info?.address || 'Address'}, {''}
           {info?.city || 'City'} {info?.country || 'Country'}
         </div>
         <Info>
          <Info.Detail><Icons.Img src={Bed} />
            <div className="description">{info?.houseDetails?.beds || 0 } Beds </div>
          </Info.Detail>
          <Info.Detail><Icons.Img src={Bath} />
            <div className="description">{info?.houseDetails?.bath || 0 } Baths </div>
          </Info.Detail>
          <Info.Detail><Icons.Img src={Garage} />
            <div className="description">{info?.houseDetails?.garage || 0 } Garages </div>
          </Info.Detail>
          <Info.Detail><Icons.Img src={Liner} />
            <div className="description">{info?.houseDetails?.area || 0 } Sq Ft </div>
          </Info.Detail>
         
       </Info>
       </InfoWrapper>
       <Footer>
         <Info.Detail>
           <div  className='deleted' > {info?.salePrice || 0 } </div>
           <div className='subtitle' > {info?.price || 0} </div>
         </Info.Detail>
         <Info.Detail  className='end-right' >
           <FooterIcon>
             <Icons.Img src={Heard}  />
           <Icons.Img src={Resize} />
           </FooterIcon>
           
         </Info.Detail>
         
       </Footer>
    </Container>
  )
}

export default Card