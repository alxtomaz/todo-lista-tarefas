import React from 'react'
import Header from '../../componentes/Header/Header'
import './index.scss'
import Bodycoment from '../../componentes/Body/Bodycoment'
import Tasks from '../../componentes/Tasks/Tasks'

const Organization = () => {
  
  return (
    <div className='organization'>
        <Header/>
        <Bodycoment/>
        <Tasks/>       
    </div>
  )
}

export default Organization