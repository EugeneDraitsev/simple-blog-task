import { inject, observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import { SinglePost } from '../components/post'
import { STORE_COMMENTS, STORE_FEED, STORE_USERS } from '../constants'
import { CommentModel, PostModel, UserModel } from '../models'
import { FeedStore } from '../stores'

interface IPostProps {
  match: { params: { id: string } },
  feedStore: FeedStore
  comments: CommentModel[]
  user: UserModel
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: calc(100% - 40px);
  padding: 20px 20px 0 20px;
  @media (max-width: 800px) {
    width: calc(100% - 20px);
    padding: 20px 10px 0 10px;
  };
`

@inject(stores => ({
  comments: stores[STORE_COMMENTS].comments,
  feedStore: stores[STORE_FEED],
  user: stores[STORE_USERS].user,
}))
@observer
class PostContainer extends React.Component<IPostProps> {
  public componentDidMount() {
    this.props.feedStore.addViews(Number(this.props.match.params.id))
  }

  public render() {
    const { feedStore: { feed }, user, comments } = this.props

    const id = Number(this.props.match.params.id)
    const post = feed.find(x => x.id === id) || new PostModel('', '', user.id)

    return (
      <Wrapper>
        <SinglePost key={post.id} post={post} user={user} comments={comments} />
      </Wrapper>
    )
  }
}

export default PostContainer
