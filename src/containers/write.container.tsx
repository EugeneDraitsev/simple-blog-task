import { inject, observer } from 'mobx-react'
import * as React from 'react'
import styled from 'styled-components'
import { WritePagePost } from '../components/post'
import { STORE_FEED, STORE_USERS } from '../constants'
import { PostModel, UserModel } from '../models'

interface IWriteProps {
  feed: PostModel[]
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
  feed: stores[STORE_FEED].feed,
  user: stores[STORE_USERS].user,
}))
@observer
class WriteContainer extends React.Component<IWriteProps> {
  public render() {
    const { feed, user } = this.props
    const usersPosts = feed.filter(post => post.author.id === user.id)

    return (
      <Wrapper>
        {usersPosts.map(post => <WritePagePost key={post.id} post={post} user={user} />)}
      </Wrapper>
    )
  }
}

export default WriteContainer
