import { computed, observable } from 'mobx'
import { persist } from 'mobx-persist'
import { stores } from '..'
import { STORE_USERS } from '../constants'
import { UserModel } from './user.model'

export class CommentModel {
  public static generateId() {
    const id = (this.nextId || 0) + 1
    this.nextId = id
    return id
  }

  private static nextId = 0

  @persist @observable public readonly id: number

  @persist @observable public text: string

  @persist @observable public authorId: number

  @persist @observable public storyId: number

  @persist('object') @observable public date: Date

  @computed get author(): UserModel {
    const { users } = stores[STORE_USERS]
    return users.find((user) => user.id === this.authorId) || stores[STORE_USERS].user
  }

  @computed get formattedDate() {
    const date = new Date(this.date)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const formatted = `${day}.${month}.${year} ${hours}:${minutes}`
    return formatted
  }

  constructor(text: string, authorId: number, storyId: number) {
    this.id = CommentModel.generateId()
    this.text = text
    this.authorId = authorId
    this.storyId = storyId
    this.date = new Date()
  }
}
