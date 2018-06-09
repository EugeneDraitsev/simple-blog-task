// tslint:disable:max-line-length
import * as React from 'react'
import styled from 'styled-components'

const crater = (top: string, left: string, size: string) => `
  content: '';
  position: absolute;
  top: ${top};
  left: ${left};
  width: ${size};
  height: ${size};
  background-color: #EFEEDA;
  border-radius: 100%;
  border: 4px solid #DEE1C5;
`
const cloudBubble = (top: string, right: string, width: string, height: string, deg: string) => `
  content: '';
  display: block;
  position: relative;
  top: ${top};
  right: ${right};
  width: ${width};
  height: ${height};
  border: 8px solid #D4D4D2;
  border-radius: 100%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  transform: rotateZ(${deg});
  background-color: #fff;
`
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 100px;
  padding: 4px;
  border-radius: 40px;
`
const Background = styled.div`
  position: absolute;
  top: -4px;
  left: -4px;
  width: 100%;
  height: 100%;
  background-color: #C0E6F6;
  border-radius: 40px;
  border: 4px solid #81C0D5;
  transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`
const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: 50px;
  background-color: #F5EB42;
  border: 4px solid #E4C74D;
  border-radius: 50%;
  transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`
const Figure = styled.div`
  position: absolute;
  bottom: -14px;
  left: -50px;
  display: block;
  width: 80px;
  height: 30px;
  border: 8px solid #D4D4D2;
  border-radius: 20px;
  background-color: #fff;
  transform: scale(0.4);
  transition: all 0.12s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:after {
    ${ cloudBubble('-65px', '-42px', '15px', '15px', '70deg') };
  }
  &:before {
    ${ cloudBubble('-25px', '-10px', '30px', '30px', '30deg') };
  }
`
const FigureAlt = styled.div`
  ${ crater('5px', '2px', '2px') };
  box-shadow: 42px -7px 0 -3px #FCFCFC, 75px -10px 0 -3px #FCFCFC, 54px 4px 0 -4px #FCFCFC, 83px 7px 0 -2px #FCFCFC, 63px 18px 0 -4px #FCFCFC, 44px 28px 0 -2px #FCFCFC, 78px 23px 0 -3px #FCFCFC;
  transition: all .12s cubic-bezier(0.250, 0.460, 0.450, 0.940);
  transform: scale(0);
  &:before {
    ${ crater('-6px', '18px', '7px') };
  }
  &:after {
    ${ crater('19px', '15px', '2px') };
  }
`
const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  border-radius: 40px;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
  &:checked {
    ~ ${Background} {
      background-color: #484848;
      border-color: #202020;
    }
    ~ ${Switch} {
      margin-left: 0;
      border-color: #DEE1C5;
      background-color: #FFFDF2;
      ${Figure} {
        margin-left: 40px;
        opacity: 0;
        transform: scale(0.1);
      }
      ${FigureAlt} {
        transform: scale(1);
      }
    }
  }
`

interface IToggle {
  className?: string
  checked?: boolean
  onChange?: () => void
}

export const Toggle = ({ className, checked, onChange }: IToggle) => {
  return (
    <Wrapper className={className}>
      <Input checked={checked} onChange={onChange} type="checkbox" />
      <Background />
      <Switch>
        <Figure />
        <FigureAlt />
      </Switch>
    </Wrapper>
  )
}
