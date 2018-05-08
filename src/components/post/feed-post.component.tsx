import { lighten } from 'polished'
import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from '../'
import { PostModel, UserModel } from '../../models'
import { PostInfo } from './'

interface IUserInfo {
  post: PostModel
  user: UserModel
  className?: string
}

const Wrapper = styled(Card)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: 900px;
  max-width: calc(100vw - 40px);
  height: auto;
  margin: 0 20px 20px 20px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.5s;
  border: 1px solid transparent;
  &:hover {
    background: ${props => lighten(1, props.theme.colors.primaryBackground)};
    border: ${props => `1px solid ${lighten(0.2, props.theme.colors.primary)}`};
  }
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Title = styled.div`
  font-size: 48px;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 54px;
  max-height: 162px;
`
const Text = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
`

export class FeedPost extends React.Component<IUserInfo> {
  public render() {
    const { className, post, user } = this.props

    return (
      <Wrapper className={className}>
        <NavLink to={`/post/${post.id}`}>
          <Title>{post.title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: post.textPreview }} />
          <PostInfo post={post} user={user} />
        </NavLink>
      </Wrapper>
    )
  }
}
