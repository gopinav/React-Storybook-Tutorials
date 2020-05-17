import React from 'react'
import { Button } from '@chakra-ui/core'
import { action, actions } from '@storybook/addon-actions'

export default {
  title: 'Chakra/Button',
  component: Button
}

export const Success = () => (
  <Button variantColor='green' onClick={action('Click handler')}>
    Success
  </Button>
)
export const Danger = () => (
  <Button variantColor='red' {...actions('onClick', 'onMouseOver')}>
    Danger
  </Button>
)
