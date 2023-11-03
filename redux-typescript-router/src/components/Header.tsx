import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Nav } from './Nav'
import './header.css'
import Button from './Button'

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header>
      <div className="header-container">
      <div className="learn-container">
        <div className="learn-text"><Link to = '/'>Learn</Link></div>
        <div className="learn-image"></div>
      </div>

      <Nav/>
      
      
      
      <div className="buttons">
        <Link to="/login"><Button type={'submit'} text={'Sign In'}></Button></Link>
        <Link to="/joinus"><Button type={'submit'} text={'Sign Up'}></Button></Link>
      </div>
      </div>
    </header>
  )
}

export default Header