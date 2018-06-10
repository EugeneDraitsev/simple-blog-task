// tslint:disable:max-line-length

const colors = {
  activeBackground: '#FFFFFF',
  activeLink: '#349884',
  activeText: '#FFFFFF',
  avatarBackground: '#C4C4C4',
  avatarBorder: '#a0a0a0',
  basicBackground: '#edeef0',
  controlsBackground: '#349884',
  controlsColor: '#FFFFFF',
  mainGradient1: '#43C6AC',
  mainGradient2: '#2488b7',
  overlay: 'rgba(0, 0, 0, 0.5)',
  primary: '#349884',
  primaryBackground: '#F8F8F8',
  primaryBorder: '#349884',
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
  headerShadow: '0 2px 8px rgba(210, 210, 210, 0.5)',
  sidebarGradient: `linear-gradient(0deg, ${colors.mainGradient1} 0%, ${colors.mainGradient2} 50%, ${colors.mainGradient1} 100%);`,
}
