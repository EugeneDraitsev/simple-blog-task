import React from 'react'
import styled from 'styled-components'
import { StoryModel } from '../../models'

interface ICommentViewsInfo {
  story: StoryModel
  className?: string
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`
const Icon = styled.div`
  font-size: 24px;
  line-height: 24px;
  margin: 0 10px;
`
const Value = styled.div`
  font-size: 16px;
  font-weight: 300;
`

export const CommentViewsInfo = ({ className, story }: ICommentViewsInfo) => (
  <Wrapper className={className}>
    <Icon className="material-icons">comment</Icon>
    <Value>{story.comments.length}</Value>
    <Icon className="material-icons">remove_red_eye</Icon>
    <Value>{story.views}</Value>
  </Wrapper>
)
