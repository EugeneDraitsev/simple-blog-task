import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: ${({ theme }) => theme.colors.controlsBackground};
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
    background: ${({ theme }) => darken(0.1, theme.colors.controlsBackground)};
  }

  &[disabled] {
    background: ${({ theme }) => lighten(0.4, theme.colors.controlsBackground)};
    cursor: auto;
  }
`
