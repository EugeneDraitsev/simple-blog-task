import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/styles/themes/default.theme'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
