import React from 'react'
import styled from 'styled-components/macro'
import { Button, DangerButton } from '../controls/buttons.component'
import { Modal } from './modal.compontent'

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
const AnimatedModal = styled(Modal)`
  transform: ${(props) => (props.isOpen ? 'translate(-50%, -50%) scale(1)' : 'translate(-100vw, -50%) scale(0) ')};
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
const CancelButton = styled(Button)`
 margin-right: 10px;
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
  onDelete?: () => void
}

const deleteFunc = (onRequestClose: () => void, onDelete: () => void) => {
  onRequestClose()
  onDelete()
}

export class DeleteModal extends React.PureComponent<IDeleteModal> {
  public render() {
    const { children, onRequestClose, isOpen, onDelete } = this.props

    return (
      <AnimatedModal isOpen={isOpen} onRequestClose={onRequestClose} overlay title="Are you sure?" {...this.props}>
        <ModalContent>
          {children}
          <ButtonWrapper>
            <Flex />
            <CancelButton onClick={onRequestClose}>Cancel</CancelButton>
            <DangerButton onClick={() => deleteFunc(onRequestClose!, onDelete!)}>Delete</DangerButton>
          </ButtonWrapper>
        </ModalContent>
      </AnimatedModal>
    )
  }
}
