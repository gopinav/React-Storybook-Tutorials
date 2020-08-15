import React from 'react'
import './Input.css'

function Input (props) {
  const { size = 'medium', ...rest } = props
  return (
    <input className={`input ${size}`} {...rest} />
  )
}

export default Input
