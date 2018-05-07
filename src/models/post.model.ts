import { computed, observable } from 'mobx'
import { persist } from 'mobx-persist'
import * as moment from 'moment'
import { CommentModel, UserModel } from './'

export class PostModel {
  public static generateId() {
    return this.nextId = this.nextId + 1
  }

  private static nextId = 0

  @persist @observable public readonly id: number
  @persist @observable public title: string
  @persist @observable public text: string
  @persist('object') @observable public date: Date
  @persist('object') @observable public author: UserModel
  @persist('list') @observable public comments: CommentModel[] = []
  @persist @observable public views: number

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
    return moment(this.date).format('DD.MM.YYYY HH:mm')
  }

  constructor(title: string, text: string, author: UserModel) {
    this.id = PostModel.generateId()
    this.title = title
    this.text = text
    this.author = author
    this.views = 0
    this.date = new Date()
  }

  private formatPost = () => this.text.replace(/\n\n(.*?)\n\n/ig, '<p>$1</p>')
    .replace(/<p><\/p>/ig, '<p><br></p>')
    .replace('/\n\n/ig', '<p><br></p>')
}
