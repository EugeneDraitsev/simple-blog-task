import { darken, lighten } from 'polished'
import styled from 'styled-components'
import styledTS from 'styled-components-ts'

interface IButton {
  background?: string,
  theme?: { colors: { controlsBackground: string, controlsColor: string } }
}

export const Button = styledTS<IButton>(styled.button)`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: ${({ background, theme }: IButton) => background || theme!.colors.controlsBackground};
  color: ${({ theme, color }) => color || theme.colors.controlsColor};
  font-family: Roboto, sans-serif;
  padding: 20px;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-size: 14px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, .15) inset;
  text-transform: uppercase;
  user-select: none;
  transition: 0.3s background-color;

  &:hover {
    background: ${({ background, theme }: IButton) => darken(0.1, background || theme!.colors.controlsBackground)};
  }

  &[disabled] {
    background: ${({ background, theme }: IButton) => lighten(0.4, background || theme!.colors.controlsBackground)};
    cursor: auto;
  }
`
