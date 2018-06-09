import * as React from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Draft, { draftToHtml, draftToRaw, htmlToDraft } from 'react-wysiwyg-typescript'
import styled from 'styled-components'
import { Card, PrimaryButton } from '../'
import { StoryModel, UserModel } from '../../models'

interface IEditProps {
  story: StoryModel
  user: UserModel
  savePost: (text: string, title: string) => void
}

const Wrapper = styled(Card)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
  width: 900px;
  max-width: calc(100vw - 40px);
  height: auto;
  margin: 0 20px 20px 20px;
  padding: 20px;
  border: 1px solid transparent;
  @media (max-width: 800px) {
     margin: 0 0 20px 0;
  }
  .rdw-editor-wrapper, .rdw-editor-toolbar, .rdw-dropdown-selectedtext {
    background: ${props => props.theme.colors.primaryBackground};
  }
  .rdw-option-wrapper {
    background: ${props => props.theme.colors.avatarBackground};
  }
  .rdw-editor-toolbar {
    margin-bottom: 10px;
  }
  .rdw-editor-wrapper {
    overflow: hidden;
    width: 100%;
  }
  .public-DraftEditor-content {
    overflow: hidden;
  }
  .Toastify__toast-body, .Toastify__toast, .Toastify__close-button {
    color: ${props => props.theme.colors.primaryText};
    background: ${props => props.theme.colors.primaryBackground};
  }
  .Toastify__toast-body {
    margin-left: 10px;
  }
  .Toastify__close-button  {
    opacity: 1;
  }
`
const Title = styled.input`
  width: calc(100% - 23px);
  padding: 10px;
  margin-bottom: 10px;
  font-size: 48px;
  text-transform: capitalize;
  outline: none;
  background: ${props => props.theme.colors.primaryBackground};
  border: ${props => `1px solid ${props.theme.colors.secondaryBackground}`};
  color: ${props => props.theme.colors.primaryText};
`
const Buttons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

class StoryEdit extends React.Component<IEditProps> {
  public state = {
    editorState: htmlToDraft(this.props.story.text),
    title: this.props.story.title,
  }
  public toastId: number

  public onSaveClick = () => {
    const { savePost } = this.props
    const { editorState, title } = this.state
    const text = draftToHtml(JSON.parse(draftToRaw(editorState)))

    savePost(text, title)
    if (!toast.isActive(this.toastId)) {
      this.toastId = toast('Saved!', {
        autoClose: 3000,
        closeOnClick: true,
        hideProgressBar: true,
        pauseOnHover: true,
        position: 'top-right',
      })
    }
  }

  public render() {
    const { editorState, title } = this.state
    const toolbar = {
      inline: { options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'] },
      options: ['inline', 'colorPicker', 'emoji', 'history'],
    }

    return (
      <Wrapper>
        <ToastContainer transition={Slide} />
        <Title maxLength={120} value={title} onChange={e => this.setState({ title: e.target.value })} />
        <Draft
          editorState={editorState}
          onEditorStateChange={state => this.setState({ editorState: state })}
          toolbar={toolbar}
        />
        <Buttons>
          <PrimaryButton disabled={!editorState || !title} onClick={this.onSaveClick}>Save</PrimaryButton>
        </Buttons>
      </Wrapper>
    )
  }
}

export default StoryEdit
