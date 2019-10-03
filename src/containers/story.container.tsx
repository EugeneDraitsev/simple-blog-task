import { inject, observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components/macro'
import { SingleStory } from '../components/stories'
import { STORE_COMMENTS, STORE_FEED, STORE_ROUTER, STORE_USERS } from '../constants'
import { CommentModel, StoryModel, UserModel } from '../models'
import { FeedStore, RouterStore } from '../stores'

interface IPostProps {
  match: { params: { id: string } },
  feedStore: FeedStore
  comments: CommentModel[]
  router: RouterStore
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

@inject((stores: any) => ({
  comments: stores[STORE_COMMENTS].comments,
  feedStore: stores[STORE_FEED],
  router: stores[STORE_ROUTER],
  user: stores[STORE_USERS].user,
}))
@observer
class StoryContainer extends React.Component<IPostProps> {
  public componentDidMount() {
    const { router } = this.props
    const story = this.findPost()

    if (!story) {
      return router.push('/404')
    }

    return this.props.feedStore.addViews(Number(this.props.match.params.id))
  }

  private findPost = () => {
    const { feedStore: { feed } } = this.props
    const id = Number(this.props.match.params.id)
    return feed.find((x) => x!.id === id)
  }

  public render() {
    const { user, comments } = this.props
    const story = this.findPost()

    if (!story) {
      return null
    }

    return (
      <Wrapper>
        <SingleStory story={story || new StoryModel('', '', user.id)} user={user} comments={comments} />
      </Wrapper>
    )
  }
}

export default StoryContainer
