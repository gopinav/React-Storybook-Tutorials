import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core'

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>{story()}</Box>
  </ThemeProvider>
))
