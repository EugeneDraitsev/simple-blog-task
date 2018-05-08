import * as React from 'react'
import styled from 'styled-components'
import { Button, DangerButton } from '../'
import { Modal } from './modal.compontent'

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
const AnimatedModal = styled(Modal)`
  transform: ${props => props.isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-100vw, -50%) scale(0) '};
  transition: all 0.3s;
`
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-end;
  width: 100%;
  margin-top: 20px;
`
const Flex = styled.div`
  flex: 1;
`

export interface IDeleteModal {
  isOpen: boolean
  closeOnEsc?: boolean
  closeOnOverlay?: boolean
  overlay?: boolean
  title?: string
  className?: string
  children?: React.ReactChild
  onRequestClose?: () => void
}

export class DeleteModal extends React.PureComponent<IDeleteModal> {
  public render() {
    const { children, onRequestClose, isOpen } = this.props

    return (
      <AnimatedModal isOpen={isOpen} onRequestClose={onRequestClose} overlay title="Are you sure?" {...this.props}>
        <ModalContent>
          {children}
          <ButtonWrapper>
            <Flex />
            <Button onClick={onRequestClose}>Cancel</Button>
            <DangerButton onClick={onRequestClose}>Delete</DangerButton>
          </ButtonWrapper>
        </ModalContent>
      </AnimatedModal>
    )
  }
}
