import React from 'react'
import Header from '../../componentes/Header/Header'
import './index.scss'
import Bodycoment from '../../componentes/Body/Bodycoment'
import Tasks from '../../componentes/Tasks/Tasks'

const Organization = ({todos1, setTodos1}) => {
  
  return (
    <div className='organization'>
        <Header/>
        <Bodycoment/>
        <Tasks todos1={todos1} setTodos1={setTodos1}/>      
    </div>
  )
}

export default Organization