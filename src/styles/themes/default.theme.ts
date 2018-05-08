// tslint:disable:max-line-length

const colors = {
  activeLink: '#349884',
  activeText: '#FFFFFF',
  avatarBackground: '#C4C4C4',
  basicBackground: '#edeef0',
  controlsBackground: '#349884',
  controlsColor: '#FFFFFF',
  mainGradient1: '#43C6AC',
  mainGradient2: '#F8FFAE',
  primary: '#349884',
  primaryBackground: '#F8F8F8',
  primaryText: '#000000',
  secondaryBackground: '#d9d9d9',
  secondaryText: '#828282',
  spinner: '#349884',
}

const buttons = {
  danger: {
    background: '#ca5a5a',
    color: '#FFFFFF',
  },
  default: {
    background: '#E6E6E6',
    color: '#828282',
  },
  primary: {
    background: '#349884',
    color: '#FFFFFF',
  },
}

export default {
  buttons,
  colors,
  headerGradient: `linear-gradient(90deg, ${colors.mainGradient1} 0%, ${colors.mainGradient2} 50%, ${colors.mainGradient1} 100%)`,
  sidebarGradient: `linear-gradient(0deg, ${colors.mainGradient1} 0%, ${colors.mainGradient2} 50%, ${colors.mainGradient1} 100%);`,
}
