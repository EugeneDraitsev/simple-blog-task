import React from 'react'
import styled from 'styled-components/macro'
import { UserPostInfo } from '..'
import { CommentModel, UserModel } from '../../models'
import { Card } from '../card'

const Wrapper = styled(Card)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  max-width: calc(100vw - 40px);
  height: auto;
  margin: 0 20px 20px 20px;
  padding: 20px;
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Text = styled.div`
  font-size: 16px;
  max-width: calc(100% - 64px);
  font-weight: 300;
  line-height: 20px;
  margin-left: 64px;
  word-break: break-all;
`

interface CommentProps {
  comment: CommentModel
  user: UserModel
  className?: string
}

export const Comment = ({ className, user, comment, comment: { author } }: CommentProps) => (
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
