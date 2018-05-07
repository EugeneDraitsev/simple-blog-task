import { observable } from 'mobx'
import { persist } from 'mobx-persist'

// tslint:disable-next-line
const EMOJIS = ["😃", "🐻", "🍔", "⚽", "🌇", "💡", "🔣", "🎌", "💦", "💦", "🐻", "🙈", "🙉", "🙊", "💥", "💦", "💨", "💫", "🐵", "🐒", "🦍", "🐶", "🐕", "🐩", "🐺", "🦊", "🐱", "🐈", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦒", "🐘", "🦏", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿", "🦔", "🦇", "🐻", "🐨", "🐼", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊", "🦅", "🦆", "🦉", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🐟", "🐠", "🐡", "🦈", "🐙", "🐚", "🦀", "🦐", "🦑", "🐌", "🦋", "🐛", "🐜", "🐝", "🐞", "🦗", "🕷", "🕸", "🦂", "💐", "🌸", "💮", "🏵", "🌹", "🥀", "🌺", "🌻", "🌼", "🌷", "🌱", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🍄", "🌰", "🌍", "🌎", "🌏", "🌐", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌝", "🌞", "⭐", "🌟", "🌠", "⛅", "⛈", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "🌈", "⛄", "🔥", "💧", "🌊", "🎄", "✨", "🎋", "🎍", "😃", "🐻", "🍔", "⚽", "🌇", "💡", "🔣", "🎌", "🤷", "❤", "😂", "🔥", "🤔", "😍", "😊", "👍", "🌱", "💦", "🔫", "🤷‍♀️", "🐦", "🙅‍♀️", "😏", "📚", "🎂", "🛍", "🐉", "🎅", "🐰", "🎥", "🍂", "👨", "💪", "🎓", "🔥", "🎃", "🕎", "👩", "🎊", "🏊", "👑", "🌱", "🏈", "🦃", "💘", "👰", "⛄", "🎿", "⚽", "🌎"]

export class UserModel {
  public static generateId() {
    return UserModel.nextId = (UserModel.nextId || 0) + 1
  }

  public static generateAvatar() {
    return EMOJIS[Math.round(EMOJIS.length * Math.random())]
  }

  @persist @observable private static nextId = 0

  @persist @observable public readonly id: number
  @persist @observable public name: string
  @persist @observable public avatar: string

  constructor(name: string) {
    this.id = UserModel.generateId()
    this.name = name
    this.avatar = UserModel.generateAvatar()
  }
}
