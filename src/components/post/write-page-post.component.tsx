import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Card } from '../'
import { PostModel, UserModel } from '../../models'
import { CommentViewsInfo } from '../post/comment-views-info.component'

interface IWritePagePost {
  post: PostModel
  user: UserModel
  className?: string
}

const Wrapper = styled(Card)`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 900px;
  max-width: calc(100vw - 40px);
  height: auto;
  margin: 0 20px 20px 20px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.5s;
  border: 1px solid transparent;
  flex-wrap: wrap;
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Title = styled.div`
  font-size: 30px;
  text-transform: capitalize;
  @media (max-width: 800px) {
     width: 100%;
     margin-bottom: 20px;
  };
`
const Flex = styled.div`
  flex: 1;
  min-width: 10px;
`
const CommentInfo = styled(CommentViewsInfo)`
  margin-right: 20px;
`

export class WritePagePost extends React.Component<IWritePagePost> {
  public render() {
    const { className, post } = this.props

    return (
      <Wrapper className={className}>
        <Title>{post.title}</Title>
        <Flex />
        <CommentInfo post={post} />
        <Button background="#ca5a5a">Delete</Button>
        <NavLink to={`edit/${post.id}`}>
          <Button>Edit</Button>
        </NavLink>
      </Wrapper>
    )
  }
}
