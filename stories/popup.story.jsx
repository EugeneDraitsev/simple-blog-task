import * as React from 'react'
import styled from 'styled-components'

import { Popup } from './../src/components'

import testImg from '../src/styles/images/test-image.jpg'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled.div`
  padding: 20px;
  color: rgb(1, 85, 147);
  font-family: weld-light, sans-serif;
  font-size: 40px;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`
const PopupContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const TestImage = styled.div`
  width: 270px;
  height: 200px;
  background: url('${testImg}') center center;
`
const TestText = styled.div`
  width: 160px;
  padding: 0 5px;
  text-align: center;
  font-size: 16px;
`

const AnimatedPopup = styled(Popup)`
 transform: ${(props) => props.isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-100vw, -50%) scale(0) '};
 transition: all 0.3s;
`


export class PopupStory extends React.Component {
  state = {
    isOpen: false,
  }

  closeModal = () => this.setState({ isOpen: false })
  openModal = () => this.setState({ isOpen: true })

  render() {
    const { isOpen } = this.state
    const { animated } = this.props
    const PopupComponent = animated ? AnimatedPopup : Popup

    return (
      <Wrapper>
        <Button onClick={this.openModal}>Click to open popup</Button>
        <PopupComponent isOpen={isOpen} onRequestClose={this.closeModal} {...this.props}>
          <PopupContent>
            <TestImage />
            <TestText>
              Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla
            </TestText>
          </PopupContent>
        </PopupComponent>
      </Wrapper>
    )
  }
}
