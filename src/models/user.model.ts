import { observable } from 'mobx'
import { persist } from 'mobx-persist'

// eslint-disable-next-line max-len
const EMOJIS = ['😃', '🐻', '🍔', '⚽', '🌇', '💡', '🔣', '🎌', '💦', '💦', '🐻', '🙈', '🙉', '🙊', '💥', '💦', '💨', '💫', '🐵', '🐒', '🦍', '🐶', '🐕', '🐩', '🐺', '🦊', '🐱', '🐈', '🦁', '🐯', '🐅', '🐆', '🐴', '🐎', '🦄', '🦓', '🐮', '🐂', '🐃', '🐄', '🐷', '🐖', '🐗', '🐽', '🐏', '🐑', '🐐', '🐪', '🐫', '🦒', '🐘', '🦏', '🐭', '🐁', '🐀', '🐹', '🐰', '🐇', '🐿', '🦔', '🦇', '🐻', '🐨', '🐼', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊', '🦅', '🦆', '🦉', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🐉', '🦕', '🦖', '🐳', '🐋', '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🦀', '🦐', '🦑', '🐌', '🦋', '🐛', '🐜', '🐝', '🐞', '🦗', '🕷', '🕸', '🦂', '💐', '🌸', '💮', '🏵', '🌹', '🥀', '🌺', '🌻', '🌼', '🌷', '🌱', '🌲', '🌳', '🌴', '🌵', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃', '🍄', '🌰', '🌍', '🌎', '🌏', '🌐', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌙', '🌚', '🌛', '🌜', '🌝', '🌞', '⭐', '🌟', '🌠', '⛅', '⛈', '🌤', '🌥', '🌦', '🌧', '🌨', '🌩', '🌪', '🌫', '🌬', '🌈', '⛄', '🔥', '💧', '🌊', '🎄', '✨', '🎋', '🎍', '😃', '🐻', '🍔', '⚽', '🌇', '💡', '🔣', '🎌', '🤷', '❤', '😂', '🔥', '🤔', '😍', '😊', '👍', '🌱', '💦', '🔫', '🐦', '😏', '📚', '🎂', '🛍', '🐉', '🎅', '🐰', '🎥', '🍂', '👨', '💪', '🎓', '🔥', '🎃', '🕎', '👩', '🎊', '🏊', '👑', '🌱', '🏈', '🦃', '💘', '👰', '⛄', '🎿', '⚽', '🌎']

export class UserModel {
  public static generateId() {
    const id = (UserModel.nextId || 0) + 1
    UserModel.nextId = id
    return id
  }

  public static generateAvatar() {
    return EMOJIS[Math.round(EMOJIS.length * Math.random())]
  }

  @persist @observable private static nextId = 0

  @persist @observable public readonly id: number

  @persist @observable public name: string

  @persist @observable public avatar: string

  @persist @observable public theme: string

  constructor(name: string) {
    this.id = UserModel.generateId()
    this.name = name
    this.avatar = UserModel.generateAvatar()
    this.theme = 'light'
  }
}
