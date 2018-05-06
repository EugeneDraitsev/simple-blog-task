import * as React from 'react'

interface IPostProps {
  match: { params: { id: string } }
}

const PostContainer: React.SFC<IPostProps> = props => (
  <div>Post {props.match.params.id}</div>
)

export default PostContainer
