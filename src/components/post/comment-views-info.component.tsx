import * as React from 'react'
import styled from 'styled-components'
import { PostModel } from '../../models'

interface ICommentViewsInfo {
  post: PostModel
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

export const CommentViewsInfo: React.SFC<ICommentViewsInfo> =
  ({ className, post }) => (
    <Wrapper className={className}>
      <Icon className="material-icons">comment</Icon>
      <Value>{post.comments.length}</Value>
      <Icon className="material-icons">remove_red_eye</Icon>
      <Value>{post.views}</Value>
    </Wrapper>
  )
