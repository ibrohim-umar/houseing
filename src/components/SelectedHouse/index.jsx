import React from 'react'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Container } from './style'

const Selected = () => {
    const [state, setState] = useState({})
    const {id} =useParams()
    const {REACT_APP_BASE_URL:url} = process.env
    useQuery(
        'get data' , () => {
            return fetch(`${url}/v1/houses/${id.replace(':', '')}`,{
                method:'GET',
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            ).then((res)=> res.json())
            
        },
        {
            onSuccess: (res) => {
                console.log(res, 'res');
                setState(res?.data)
            },
            keepPreviousData:true,
            refetchOnWindowFocus:false
        }
    )

   console.log(id);

  return (
   <Container>
     {state?.city}
     <p>
          {state?.attachments?.map((value) => {
          return <img src={value?.imgPath} alt=''/>;
          
      } )}
     </p>
     
   </Container>
  )
}

export default Selected