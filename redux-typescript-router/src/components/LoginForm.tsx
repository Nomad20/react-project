import React, { useState } from 'react'
import './login.css'
import Button from './Button'
import { Link } from 'react-router-dom'

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<{username: string, password: string}>({
    username: '',
    password: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    if (!formData.password || !formData.username)  {
      alert('Please enter a username and password')
    } else {
      alert('Login form submitted')
    }
  }

  return (
    <div className='login-container'>
      <div className="sign-in-text">Sign In</div>
      <div className="welcome-text">Welcome back</div>
      <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-container">
      <div className="input-icon"></div>
        <input
          type="text"
          name="username"
          className="input-field"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username or Email"
        /></div>
        <div className='input-conatiner'>
        <div className="input-icon"></div>
        <input
          type="password"
          name="password"
          className="input-field"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        </div>
        
        <Button type={'submit'} text={'Sign In'}></Button>
      </form>
      <div className="or-text">or</div>
      <div className="sign-up-text" >Don't have an account? <Link to="/joinus">Sign up</Link></div>
    </div>
  )
}

export default LoginForm