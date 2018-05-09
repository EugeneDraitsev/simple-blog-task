import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { storiesOf } from '@storybook/react'

import { ButtonsModalStory, ModalStory } from './modal.story'
import getStoriesStory from './stories.story'
import getUserStory from './user.story'
import getCommentsStory from './comments.story'
import { Spinner, Button, DangerButton, PrimaryButton } from '../src/components'
import light from '../src/styles/themes/light.theme'
import dark from '../src/styles/themes/dark.theme'
import '../src/styles/global.styles'

const StoriesWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.primaryBackground};
  color: ${p => p.theme.colors.primaryText};
`

const StyledDecorator = story => (
  <ThemeProvider theme={light}>
    {story()}
  </ThemeProvider>
)

const DarkStyledDecorator = story => (
  <ThemeProvider theme={dark}>
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

getUserStory()
getStoriesStory()
getCommentsStory()

storiesOf('Dark theme', module)
  .addDecorator(DarkStyledDecorator)
  .add('Dark modal', () => <ButtonsModalStory />)
  .add('Dark spinners 🌀', () => (
    <StoriesWrapper>
      <Spinner />
      <Spinner strokeWidth={1} />
      <Spinner width={100} height={100} />
      <Spinner color="red" />
    </StoriesWrapper>
  ))