import React, {useState} from 'react'
import { Container, Wrapper, Icon,Advanced, Section } from './style'
import { Popover} from 'antd'
import Search from '../../assets/search.png'
import Setting from '../../assets/setting-lines.jpg'
import Input from '../../pages/Generic/Input/index'
import   Home from '../../assets/Home.jpg'
import Button from '../../pages/Generic/Button/index'
import {   useNavigate } from 'react-router-dom'
import useSearch from '../../hooks/useSearch'
import UseReplace from '../../hooks/useReplace'



const Filter = () => {
   const navigate = useNavigate()
   const query =useSearch()

   const [state, setState] = useState({
    city: query.get('city'),
    country: query.get('country'),
    region: query.get('region'),
    zipCode: query.get('zipCode'),
    maxPrice: query.get('maxPrice'),
    minPrice: query.get('minPrice'),
    size: query.get('size'),
    sort: query.get('sort'),
   })

 const onChange = ({target}) => {
   const {value, name} = target
    navigate(`${UseReplace(name, value)}`)
    setState({...state,[name]:value})
  
 }
  const onClear = () => {
    navigate('/properties')
    setState({
      country: '',
      region: '',
      city: '',

    });
  }

  const AdvancedSearch= 
  <Advanced>
    <Advanced.Title> Address </Advanced.Title>
    <Section> 
      <Input
      value= {state.country} 
      onChange={onChange} 
      name='country'   
      placeholder='Country' />
      <Input 
      value= {state.region}
      onChange={onChange} 
      name='region'
      placeholder='Region' />
      <Input 
      onChange={onChange} 
      name='city'  
      placeholder='City'
      value= {state.city}
      />
      <Input  placeholder='Zip Code' />
    </Section>
    <Advanced.Title> Apartment info </Advanced.Title>
    <Section> 
      <Input  placeholder='Room' />
      <Input  placeholder='Size' />
      <Input  placeholder='Sort' /> </Section>
    <Advanced.Title> Price </Advanced.Title>
    <Section> 
      <Input mr={20} placeholder='Min Price' />
      <Input mr={20} placeholder='Max Price' />
       </Section>
       <Section>
         
         
         <Button ml={20} width='131px'  type='primary' onClick={onClear} >Clear</Button>
       
       </Section>
       
  </Advanced>
  return (
   <Container>
      <Wrapper>  
        <Input   pl='42px' placeholder='Enter an adress, neighborhood city or zip code'  >
          <Icon.Home   src={Home} /> 
        </Input>
        <Popover placement='bottomRight'  content={AdvancedSearch}  trigger={'click'} >
          <Button width='131px' ml={20}  type='secondary' >
          <Icon.Home src={Setting} />    Advanced</Button>
        </Popover>
        
        <Button width='131px' ml={20} type='primary' >
        <Icon.Home src={Search} />    Search</Button>
      </Wrapper>
   </Container>
  )
}

export default Filter