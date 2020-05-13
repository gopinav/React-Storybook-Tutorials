import React from 'react'
import './Button.css'

function Button (props) {
  const { className = 'primary', children, ...rest } = props
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Button
