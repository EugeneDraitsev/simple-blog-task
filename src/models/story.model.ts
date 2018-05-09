import { computed, observable } from 'mobx'
import { persist } from 'mobx-persist'
import { STORE_COMMENTS, STORE_USERS } from '../constants'
import { CommentModel, UserModel } from './'
import { stores } from './../'

export class StoryModel {
  public static generateId() {
    return this.nextId = (this.nextId || 0) + 1
  }

  private static nextId = 0

  @persist @observable public readonly id: number
  @persist @observable public title: string
  @persist @observable public text: string
  @persist @observable public authorId: number
  @persist @observable public views: number
  @persist('object') @observable public date: Date

  @computed get comments(): CommentModel[] {
    const comments: CommentModel[] = stores[STORE_COMMENTS].comments
    return comments.filter(comment => comment.storyId === this.id)
  }

  @computed get author(): UserModel {
    const users: UserModel[] = stores[STORE_USERS].users
    return users.find(user => user.id === this.authorId) || stores[STORE_USERS].user
  }

  @computed get textPreview() {
    const formattedStory = this.formatPost()
    const parts = formattedStory.split('</p>')

    return parts.reduce((acc, part, i) => {
      if (acc.slice(-7) === '...</p>') {
        return acc
      }
      if (acc.length + part.length > 500) {
        return `${acc + part.substring(0, 500 - acc.length)}...</p>`
      }
      if (i > 1) {
        return `${acc + parts[i]}...</p>`
      }
      return `${acc + parts[i]}</p>`
    })
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

  constructor(title: string, text: string, authorId: number) {
    this.id = StoryModel.generateId()
    this.title = title
    this.text = text
    this.authorId = authorId
    this.views = 0
    this.date = new Date()
  }

  private formatPost = () => this.text.replace(/\n\n(.*?)\n\n/ig, '<p>$1</p>')
    .replace(/<p><\/p>/ig, '<p><br></p>')
    .replace('/\n\n/ig', '<p><br></p>')
}
