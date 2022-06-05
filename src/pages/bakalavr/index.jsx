import React from 'react'
import { useLocation } from 'react-router-dom'
import InfoBakalavr from '../../components/bakalavr';

const Bakalavr = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname}
      <InfoBakalavr/>
    </div>
  )
}

export default Bakalavr