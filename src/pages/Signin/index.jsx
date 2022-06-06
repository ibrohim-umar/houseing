import React, {useState} from 'react'
import { Container, Wrapper } from './style'
import Input from '../Generic/Input/index'
import Button from '../Generic/Button/index'
import {useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom'

const {REACT_APP_BASE_URL: url} =process.env

const Sign = () => {

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const navigate = useNavigate()
    
    const {mutate} = useMutation((props) => {
         return fetch(`${url}/public/auth/login`, {
        method: 'POST',
        headers:{'Content-Type' : 'application/json'} ,
        body: JSON.stringify({email, password:pw}),
    }).then((res)  => res.json() )
        
}) 
    const onSubmit = () => {
     console.log(email);
     console.log(pw);
      mutate('hey' ,{
        onSuccess: (res) => {
        localStorage.setItem('token', res?.authenticationToken);
        console.log(res);
        if(res?.authenticationToken)  navigate('/home')
    }, 
     onError: (res) => {
        console.log(res, 'error');
    },

      });
    };

    
   

    //mutate
    //isFetching
    //refetch
    //isReload
    
    
  return (
    <Container>
        <div className='title' > Signin</div>
        <Wrapper>
      <Input onChange={({target}) => setEmail(target?.value) } value={email}  placeholder={'Email'} />
      <Input onChange={({target}) => setPw(target?.value) } value={pw}  placeholder={'password'} />
      <Button onClick={onSubmit}  type='primary' >Login</Button>
      </Wrapper>
    </Container>
  )
}

export default Sign