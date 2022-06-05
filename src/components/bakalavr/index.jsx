import React from 'react'
import { useParams } from 'react-router-dom'
import Students from './students'
import AboutStudents from './aboutStudents'

const InfoBakalavr = () => {
    
    const { students } = useParams();

  return (
      <div>
          <Students/>
          <AboutStudents/>
      </div>
  )
}

export default InfoBakalavr