import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BgContainer,
  CardContainer,
  ImageHeadingCon,
  Heading,
  StylesContainer,
  TextEditorContainer,
  Image,
  ButtonBold,
  Button2,
  Button3,
  ListEle,
  Textarea,
} from './Styles'

class Editor extends Component {
  state = {bold: false, italic: false, underline: false, text: ''}

  render() {
    const {bold, underline, italic, text} = this.state
    return (
      <BgContainer>
        <CardContainer>
          <ImageHeadingCon>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageHeadingCon>
          <TextEditorContainer>
            <StylesContainer>
              <ListEle>
                <ButtonBold
                  data-testid="bold"
                  type="button"
                  active={bold}
                  onClick={() =>
                    this.setState(prevState => ({
                      bold: !prevState.bold,
                    }))
                  }
                >
                  <VscBold size={25} />
                </ButtonBold>
              </ListEle>
              <ListEle>
                <Button2
                  data-testid="italic"
                  type="button"
                  active={italic}
                  onClick={() =>
                    this.setState(prevState => ({
                      italic: !prevState.italic,
                    }))
                  }
                >
                  <GoItalic size={25} />
                </Button2>
              </ListEle>

              <ListEle>
                <Button3
                  data-testid="underline"
                  type="button"
                  active={underline}
                  onClick={() =>
                    this.setState(prevState => ({
                      underline: !prevState.underline,
                    }))
                  }
                >
                  <AiOutlineUnderline size={25} />
                </Button3>
              </ListEle>
            </StylesContainer>
            <Textarea
              value={text}
              onChange={e => this.setState({text: e.target.value})}
              bold={bold}
              italic={italic}
              underline={underline}
              cold="50"
              rows="30"
            />
          </TextEditorContainer>
        </CardContainer>
      </BgContainer>
    )
  }
}

export default Editor
