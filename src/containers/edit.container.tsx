import { inject, observer } from 'mobx-react'
import * as React from 'react'
import * as Loadable from 'react-loadable'
import styled from 'styled-components'
import { STORE_FEED, STORE_ROUTER, STORE_USERS } from '../constants'
import { PostModel, UserModel } from '../models'
import { FeedStore, RouterStore } from '../stores'

interface IEditProps {
  match: { params: { id: string } },
  feed: PostModel[],
  feedStore: FeedStore
  user: UserModel
  router: RouterStore
}

const PostEdit = Loadable({
  loader: () => import('../components/editor/editor.component'),
  loading: () => <div />,
})

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
  feed: stores[STORE_FEED].feed,
  feedStore: stores[STORE_FEED],
  router: stores[STORE_ROUTER],
  user: stores[STORE_USERS].user,
}))
@observer
class EditContainer extends React.Component<IEditProps> {
  public componentDidMount() {
    const { user, router } = this.props
    const post = this.findPost()

    if (!post || post.authorId !== user.id) {
      return router.push('/404')
    }
  }

  public savePost = (text: string, title: string): void => {
    const post = this.findPost()
    this.props.feedStore.editPost(post!.id, { title, text })
  }

  public render() {
    const { user } = this.props
    const post = this.findPost()

    return (
      <Wrapper>
        <PostEdit savePost={this.savePost} post={post!} user={user} />
      </Wrapper>
    )
  }

  private findPost = () => {
    const { feed, match } = this.props

    const id = Number(match.params.id)
    return feed.find(x => x!.id === id)
  }
}

export default EditContainer
