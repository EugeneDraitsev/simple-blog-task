import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'

import { Avatar, UserPostInfo, UserInfo } from '../components'

const StoriesWrapper = styled.div`
  min-height: calc(100vh - 20px);
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`


export default () => storiesOf('User', module)
  .add('Avatar', () => (
    <StoriesWrapper>
      <Avatar>
        <span role="img" aria-label="img">🐊</span>
      </Avatar>
      <Avatar small>
        <span role="img" aria-label="img">🐣</span>
      </Avatar>
      <Avatar background="lime">
        <span role="img" aria-label="img">🌔</span>
      </Avatar>
      <Avatar background="lightblue" small>
        <span role="img" aria-label="img">🌎</span>
      </Avatar>
    </StoriesWrapper>
  ))
  .add('User info', () => {
    const StyledWrapper = styled(StoriesWrapper)`
      flex-direction: column;
    `
    const StyledUserInfo = styled(UserInfo)`
      background: #349884;
      margin-top: 20px;
    `
    return (
      <StyledWrapper>
        <StyledUserInfo user={{
          name: 'Eugene',
          avatar: '🦖',
        }}
        />
        <StyledUserInfo user={{
          name: 'Very long name Very long nameVery long nameVery long name',
          avatar: '🐉',
        }}
        />
      </StyledWrapper>
    )
  })
  .add('User post info', () => {
    const StyledWrapper = styled(StoriesWrapper)`
      flex-direction: column;
    `
    return (
      <StyledWrapper>
        <UserPostInfo avatar="⚽" name="User" isYou formattedDate="09.05.2018 03:17" />
        <UserPostInfo avatar="⛄" name="Looooong name" isYou formattedDate="09.05.2018 03:17" />
        <UserPostInfo avatar="🐥" name="Not you" formattedDate="09.05.2018 03:17" />
      </StyledWrapper>
    )
  })
