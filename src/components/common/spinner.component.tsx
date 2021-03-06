import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const spinnerDash = keyframes`
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124px;
  }
`

const Svg = styled.svg`
  animation: ${rotate360} 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  margin: auto;
`

const Circle = styled.circle`
  animation: ${spinnerDash} 1.5s ease-in-out infinite;
  stroke-dasharray: 1,200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  stroke: ${(props) => props.color || props.theme.colors.primary};
`

export const Spinner = ({ width = 50, height = 50, color = '', strokeWidth = 5 }: any) => (
  <Svg style={{ width, height }} viewBox="25 25 50 50">
    <Circle color={color} cx="50" cy="50" r="20" fill="none" strokeWidth={strokeWidth} strokeMiterlimit="10" />
  </Svg>
)
