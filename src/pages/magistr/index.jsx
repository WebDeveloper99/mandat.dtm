import React from 'react'
import { useLocation } from 'react-router-dom'
import Students from '../../components/magistr/students'

const Magistr = () => {

  const location = useLocation();

  return (
    <div>
      {location.pathname}
      <Students/>
    </div>
  )
}

export default Magistr