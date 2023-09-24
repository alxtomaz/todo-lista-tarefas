import React from 'react'
import './index.scss'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__menu'>
            <div className='header__menu-organization'>
                <h2>Oganização</h2>
            </div>
            <div className='header__menu-tarefas'>
                <h2>Tarefas</h2>
            </div>
        </div>        
    </div>
  )
}

export default Header