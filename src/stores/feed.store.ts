import { action, observable } from 'mobx'
import { persist } from 'mobx-persist'
import { StoryModel } from '../models'

export class FeedStore {
  @persist('list', StoryModel) @observable public feed: StoryModel[] = []
  @observable public draftStories: StoryModel[] = []

  constructor(feed: StoryModel[]) {
    this.feed = feed
  }

  @action
  public addStory = (item: StoryModel): void => {
    this.feed = [...this.feed, item]
  }

  @action
  public addDraftStory = (item: StoryModel): void => {
    this.draftStories = [...this.draftStories, item]
  }

  @action
  public addViews = (id: number): void => {
    this.feed = this.feed.map((story) => {
      if (story.id === id) {
        story.views = story.views + 1
      }
      return story
    })
  }

  @action
  public editStory = (id: number, data: Partial<StoryModel>): void => {
    this.feed = this.feed.map((story) => {
      if (story.id === id) {
        if (typeof data.text === 'string') {
          story.text = data.text
        }
        if (typeof data.title === 'string') {
          story.title = data.title
        }
      }
      return story
    })
  }

  @action
  public deleteStory = (id: number): void => {
    this.feed = this.feed.filter(story => story.id !== id)
  }

  @action
  public deleteDraftStory = (id: number): void => {
    this.feed = this.feed.filter(story => story.id !== id)
  }
}
