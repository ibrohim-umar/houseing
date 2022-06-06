import React from 'react'
import Navbar from '../components/Navbar'
import {navbar} from '../utils/navbar'
import {Route, Routes, Navigate, useParams}  from 'react-router-dom'

const Root = () => {
  return (
    <>
   <Routes>
     <Route  path='/' element={<Navigate to={'/home'} />}  />
     <Route >
      {navbar.map(({path, id, Element, hidden, useParams}) => {
        return !useParams && hidden &&  <Route key={id} path={path} element={Element}   />
      } )}
     </Route>
     <Route element={<Navbar/>} >
      {navbar.map(({path, id, Element, hidden, useParams}) => {
        return (useParams || !hidden) && <Route key={id} path={path} element={Element}   />
      } )}
     </Route>
   </Routes>
    
    
    </>
  )
}

export default Root