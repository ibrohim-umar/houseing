import React, {forwardRef} from 'react'
import { Container,Wrapper,Icon } from './style'

const Input = forwardRef( (
  {children,
 onClick,
 height,
 width,
 type,
 mr,
 ml,
 mb,
 mt,
 pl,
 name,
 onChange,
 placeholder,
 defaultValue,
 value
 }, ref) => {
  return (
  <Wrapper   mr={mr}
      ml={ml}
      mb={mb}
      mt={mt} >
     <Icon> {children} </Icon>
      <Container
      ref={ref}
      pl={pl}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      width= {width}
      height={height}
      name={name}
      defaultValue={defaultValue}
      onClick={onClick}
      value={value}
      />
 </Wrapper>


 
)
})

export default Input