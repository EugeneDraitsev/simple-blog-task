/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react'

import { Comment } from '../components'

const StoriesWrapper = styled.div`
  min-height: calc(100vh - 20px);
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default () => storiesOf('Comments', module)
  .add('Simple Comments', () => {
    const StyledWrapper = styled(StoriesWrapper)`
        width: 800px;
        flex-direction: column;
      `
    return (
      <StyledWrapper>
        <Comment
          user={{ id: 1 }}
          comment={{
            author: { id: 1, name: 'Author', avatar: '🌿' },
            text: 'Nisi aute ex esse fugiat ipsum qui deserunt est mollit ullamco aliquip irure. Commodo cillum reprehenderit laborum sit.',
            formattedDate: '09.05.2018 03:17',
          }}
        />
        <Comment
          user={{ id: 1 }}
          comment={{
            author: { id: 3, name: 'Est', avatar: '🐦' },
            text: 'Voluptate magna sint exercitation tempor. Sint nulla enim irure voluptate Lorem incididunt et occaecat nostrud sit quis laborum.',
            formattedDate: '09.05.2018 03:17',
          }}
        />
        <Comment
          user={{ id: 1 }}
          comment={{
            author: { id: 2, name: 'Id Amet', avatar: '🐟' },
            text: 'Laborum Lorem duis eiusmod minim irure sit reprehenderit esse ea nisi duis nostrud mollit. Sit sunt commodo labore quis elit incididunt veniam culpa Lorem dolore labore culpa.',
            formattedDate: '09.05.2018 03:17',
          }}
        />
      </StyledWrapper>
    )
  })
