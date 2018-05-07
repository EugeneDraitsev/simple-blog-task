import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'
import { CommentModel } from '../models'

export class CommentsStore {
  @persist('list', CommentModel) @observable public comments: CommentModel[] = []

  constructor(comments: CommentModel[]) {
    this.comments = comments
  }

  @action
  public addComment = (item: CommentModel): void => {
    this.comments.push(item)
  }

  @action
  public deleteComment = (id: number): void => {
    this.comments = this.comments.filter(comment => comment.id !== id)
  }
}
