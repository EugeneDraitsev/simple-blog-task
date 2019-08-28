/* eslint-disable max-len */
const colors = {
  activeBackground: '#424242',
  activeLink: '#349884',
  activeText: '#FFFFFF',
  avatarBackground: '#C4C4C4',
  avatarBorder: '#FFFFFF',
  basicBackground: '#424242',
  controlsBackground: '#349884',
  controlsColor: '#FFFFFF',
  mainGradient1: '#43C6AC',
  mainGradient2: '#2488b7',
  overlay: 'rgba(255, 255, 255, 0.5)',
  primary: '#349884',
  primaryBackground: '#303030',
  primaryBorder: '#424242',
  primaryText: '#ffffff',
  secondaryBackground: '#d9d9d9',
  secondaryText: '#cecece',
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
  headerShadow: '0 2px 8px rgba(45, 45, 45, 0.3)',
  sidebarGradient: `linear-gradient(0deg, ${colors.mainGradient1} 0%, ${colors.mainGradient2} 50%, ${colors.mainGradient1} 100%);`,
}
