import * as React from 'react'
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
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  };
`
const Title = styled.div`
  font-size: 48px;
  text-transform: capitalize;
`
const Text = styled.div`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%
`
const SecondaryInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100px;
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

export class FeedPost extends React.Component<IUserInfo> {
  public render() {
    const { className, post, user } = this.props

    return (
      <Wrapper className={className}>
        <Title>{post.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: post.textPreview }} />
        <Footer>
          <PostInfo post={post} user={user}/>
          <SecondaryInfo>
            <Icon className="material-icons">comment</Icon>
            <Value>{post.comments.length}</Value>
            <Icon className="material-icons">remove_red_eye</Icon>
            <Value>{post.views}</Value>
          </SecondaryInfo>
        </Footer>
      </Wrapper>
    )
  }
}
