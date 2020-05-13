import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const Primary = () => <Button className='primary'>Primary</Button>
export const Secondary = () => <Button className='secondary'>Secondary</Button>
export const Success = () => <Button className='success'>Success</Button>
export const Danger = () => <Button className='danger'>Danger</Button>
