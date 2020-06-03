import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core'

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>{story()}</Box>
  </ThemeProvider>
))
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})
