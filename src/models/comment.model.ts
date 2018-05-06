import { observable } from 'mobx'

export class CommentModel {
  public static generateId() {
    return this.nextId = this.nextId + 1
  }

  private static nextId = 1

  public readonly id: number
  @observable public text: string
  @observable public title: string

  constructor(text: string, title: string) {
    this.id = CommentModel.generateId()
    this.text = text
  }
}
