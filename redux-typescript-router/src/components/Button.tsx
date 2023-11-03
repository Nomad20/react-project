import React from 'react'
import './button.css'
interface ButtonProps {
  type: 'button' | 'submit' | 'reset' 
  text: string,
  onClick?: () => void,
  disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button