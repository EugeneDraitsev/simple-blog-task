import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import { ButtonsModalStory, ModalStory } from './modal.story'
import { Button, DangerButton, PrimaryButton } from '../src/components/controls/button'
import { Spinner } from '../src/components/common/'
import Theme from '../src/styles/themes/default.theme'
import '../src/styles/global.styles'

const StoriesWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledDecorator = story => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
)

storiesOf('Buttons', module)
  .addDecorator(StyledDecorator)
  .add('Simple buttons', () => (
    <StoriesWrapper>
      <Button>Default</Button>
      <PrimaryButton>Primary</PrimaryButton>
      <DangerButton>Danger</DangerButton>
      <Button disabled>Disabled</Button>
      <PrimaryButton disabled>Disabled</PrimaryButton>
      <DangerButton disabled>Disabled</DangerButton>
      <Button>🍔 Emoji</Button>
      <PrimaryButton>🍔 Emoji</PrimaryButton>
    </StoriesWrapper>
  ))

storiesOf('Modal', module)
  .addDecorator(StyledDecorator)
  .add('Simple modal', () => <ModalStory overlay />)
  .add('Modal with title', () => <ModalStory overlay title="test title" />)
  .add('Modal with animation', () => <ModalStory animated overlay title="test title" />)
  .add('Modal with buttons', () => <ButtonsModalStory />)

storiesOf('Spinner', module)
  .addDecorator(StyledDecorator)
  .add('Spinners 🌀', () => (
    <StoriesWrapper>
      <Spinner />
      <Spinner strokeWidth={1} />
      <Spinner width={100} height={100} />
      <Spinner color="red" />
    </StoriesWrapper>
  ))

