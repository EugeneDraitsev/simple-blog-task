import { computed, observable } from 'mobx'
import { CommentModel, UserModel } from './'

export class PostModel {
  public static generateId() {
    return this.nextId = this.nextId + 1
  }

  private static nextId = 0

  public readonly id: number
  @observable public text: string
  @observable public title: string

  @observable public author: UserModel
  @computed public comments: CommentModel[]

  constructor(text: string, title: string, author: UserModel) {
    this.id = PostModel.generateId()
    this.text = text
    this.title = title
    this.author = author
  }
}
