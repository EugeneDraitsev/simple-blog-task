import { computed, observable } from 'mobx'
import { persist } from 'mobx-persist'
import * as moment from 'moment'
import { stores } from '../'
import { STORE_USERS } from '../constants'
import { UserModel } from './user.model'

export class CommentModel {
  public static generateId() {
    return this.nextId = (this.nextId || 0) + 1
  }

  private static nextId = 0

  @persist @observable public readonly id: number
  @persist @observable public text: string
  @persist @observable public authorId: number
  @persist @observable public storyId: number
  @persist('object') @observable public date: Date

  @computed get author(): UserModel {
    const users: UserModel[] = stores[STORE_USERS].users
    return users.find(user => user.id === this.authorId) || stores[STORE_USERS].user
  }

  @computed get formattedDate() {
    return moment(this.date).format('DD.MM.YYYY HH:mm')
  }

  constructor(text: string, authorId: number, storyId: number) {
    this.id = CommentModel.generateId()
    this.text = text
    this.authorId = authorId
    this.storyId = storyId
    this.date = new Date()
  }
}
