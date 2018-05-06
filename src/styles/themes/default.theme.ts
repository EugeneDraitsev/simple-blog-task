// tslint:disable:max-line-length

const colors = {
  activeLink: '#349884',
  activeText: '#FFFFFF',
  avatarBackground: '#C4C4C4',
  basicBackground: '#edeef0',
  mainGradient1: '#43C6AC',
  mainGradient2: '#F8FFAE',
  primary: '#349884',
  primaryBackground: '#FFFFFF',
  primaryText: '#000000',
  spinner: '#349884',
}

export default {
  colors,
  headerGradient: `linear-gradient(90deg, ${colors.mainGradient1} 0%, ${colors.mainGradient2} 50%, ${colors.mainGradient1} 100%)`,
  sidebarGradient: `linear-gradient(0deg, ${colors.mainGradient1} 0%, ${colors.mainGradient2} 50%, ${colors.mainGradient1} 100%);`,
}
