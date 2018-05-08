import * as React from 'react'
import styled from 'styled-components'
import { Card } from '../'
import { CommentModel, PostModel, UserModel } from '../../models'
import { AddComment, Comment } from '../comment'
import { PostInfo } from './'

interface ISinglePost {
  post: PostModel
  user: UserModel
  comments: CommentModel[]
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
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Title = styled.div`
  font-size: 48px;
  text-transform: capitalize;
  word-break: break-all;
`
const Text = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
`
const Comments = styled.div`
  margin-top: 30px;
`

export class SinglePost extends React.Component<ISinglePost> {
  public render() {
    const { className, post, user, comments } = this.props

    return (
      <Wrapper className={className}>
        <Title>{post.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: post.text }} />
        <PostInfo post={post} user={user} />
        <Comments>
          {comments.filter(x => x.postId === post.id).map(comment =>
            <Comment key={comment.id} comment={comment} user={user} />)
          }
        </Comments>
        <AddComment post={post} user={user} />
      </Wrapper>
    )
  }
}
