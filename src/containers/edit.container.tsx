import { inject, observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'

import StoryEdit from '../components/editor/editor.component'
import { STORE_FEED, STORE_ROUTER, STORE_USERS } from '../constants'
import { StoryModel, UserModel } from '../models'
import { FeedStore, RouterStore } from '../stores'

interface IEditProps {
  feed: StoryModel[],
  feedStore: FeedStore
  match: { params: { id: string } },
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
  feed: stores[STORE_FEED].feed,
  feedStore: stores[STORE_FEED],
  router: stores[STORE_ROUTER],
  user: stores[STORE_USERS].user,
}))
@observer
class EditContainer extends React.Component<IEditProps> {
  public componentDidMount() {
    const { user, router } = this.props
    const story = this.findPost()

    if (!story || story.authorId !== user.id) {
      router.push('/404')
    }
  }

  public savePost = (text: string, title: string): void => {
    const { feedStore } = this.props
    const story = this.findPost()

    if (feedStore.draftStories.map((x) => x.id).includes(story!.id)) {
      feedStore.deleteDraftStory(story!.id)
      feedStore.addStory(story!)
    }

    this.props.feedStore.editStory(story!.id, { title, text })
  }

  private findPost = () => {
    const { feed, match, feedStore: { draftStories } } = this.props

    const id = Number(match.params.id)
    return feed.find((x) => x!.id === id) || draftStories.find((x) => x!.id === id)
  }

  public render() {
    const { user } = this.props
    const story = this.findPost()

    return (
      <Wrapper>
        <StoryEdit savePost={this.savePost} story={story!} user={user} />
      </Wrapper>
    )
  }
}

export default EditContainer
