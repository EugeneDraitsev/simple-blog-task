// eslint-disable-next-line max-classes-per-file
import React from 'react'
import styled from 'styled-components'

import { Show } from '../components/common/show.component'
import { Modal } from '../components/modal/modal.compontent'
import { DeleteModal } from '../components/modal/delete-modal.compontent'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.primaryBackground};
  color: ${(p) => p.theme.colors.primaryText};
`
const Button = styled.div`
  padding: 20px;
  color: ${(p) => p.theme.colors.primaryText};
  font-size: 40px;
  text-align: center;
  cursor: pointer;
`
const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
const TestText = styled.div`
  padding: 0 5px;
  font-size: 16px;
`

const AnimatedModal = styled(Modal)`
 transform: ${(props) => (props.isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-100vw, -50%) scale(0) ')};
 transition: all 0.3s;
`

export class ModalStory extends React.Component {
  state = {
    isOpen: false,
  }

  closeModal = () => this.setState({ isOpen: false })

  openModal = () => this.setState({ isOpen: true })

  render() {
    const { isOpen } = this.state
    // eslint-disable-next-line react/prop-types
    const { animated, children } = this.props
    const ModalComponent = animated ? AnimatedModal : Modal

    return (
      <Wrapper>
        <Button onClick={this.openModal}>Click to open popup</Button>
        <ModalComponent isOpen={isOpen} onRequestClose={this.closeModal} {...this.props}>
          <ModalContent>
            <Show if={children}>
              {children}
            </Show>
            <Show if={!children}>
              <TestText>
                Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla
                Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla
              </TestText>
            </Show>
          </ModalContent>
        </ModalComponent>
      </Wrapper>
    )
  }
}

export class ButtonsModalStory extends React.Component {
  state = {
    isOpen: false,
  }

  openModal = () => this.setState({ isOpen: true })

  closeModal = () => this.setState({ isOpen: false })

  render() {
    return (
      <Wrapper>
        <Button onClick={this.openModal}>Click to open popup</Button>
        <DeleteModal isOpen={this.state.isOpen} onRequestClose={this.closeModal}>
          Are you really want to delete your post?
        </DeleteModal>
      </Wrapper>
    )
  }
}
