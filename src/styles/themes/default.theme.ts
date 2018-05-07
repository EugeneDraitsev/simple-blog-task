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
  secondaryText: '#828282',
  spinner: '#349884',
}

export default {
  colors,
  headerGradient: `linear-gradient(90deg, ${colors.mainGradient1} 0%, ${colors.mainGradient2} 50%, ${colors.mainGradient1} 100%)`,
  sidebarGradient: `linear-gradient(0deg, ${colors.mainGradient1} 0%, ${colors.mainGradient2} 50%, ${colors.mainGradient1} 100%);`,
}
