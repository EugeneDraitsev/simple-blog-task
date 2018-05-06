import { action, observable } from 'mobx'
import { PostModel } from '../models'

export class FeedStore {
  @observable public feed: PostModel[]

  constructor(feed: PostModel[]) {
    this.feed = feed
  }

  @action
  public addPost = (item: PostModel): void => {
    this.feed.push(new PostModel(item.text, item.title, item.author))
  }

  @action
  public editPost = (id: number, data: Partial<PostModel>): void => {
    this.feed = this.feed.map((post) => {
      if (post.id === id) {
        if (typeof data.text === 'string') {
          post.text = data.text
        }
        if (typeof data.title === 'string') {
          post.title = data.title
        }
      }
      return post
    })
  }

  @action
  public deleteTodo = (id: number): void => {
    this.feed = this.feed.filter(post => post.id !== id)
  }
}
