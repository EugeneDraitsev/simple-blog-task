import * as React from 'react'
import styled from 'styled-components'
import { Card, UserPostInfo } from '../'
import { CommentModel, UserModel } from '../../models'

interface IComment {
  comment: CommentModel
  user: UserModel
  className?: string
}

const Wrapper = styled(Card)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  max-width: calc(100vw - 40px);
  height: auto;
  margin: 0 20px 20px 20px;
  padding: 20px;
  transition: background-color 0.5s;
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Text = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  margin-left: 64px;
`

export const Comment: React.SFC<IComment> =
  ({ className, user, comment, comment: { author } }) => (
    <Wrapper className={className}>
      <UserPostInfo
        name={author.name}
        avatar={author.avatar}
        formattedDate={comment.formattedDate}
        isYou={author.id === user.id}
      />
      <Text>{comment.text}</Text>
    </Wrapper>
  )
