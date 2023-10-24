import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
  background-color: #25262c;
  min-height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  background-color: #1b1c22;
  width: 90%;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

export const ImageHeadingCon = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 10px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  color: #ffffff;
`

export const Image = styled.img`
  height: 60%;
  width: 80%;
  @media screen and (max-width: 700px) {
    height: 200px;
  }
`

export const TextEditorContainer = styled.div`
  background-color: #25262c;
  border: 1px solid #f8fafc;
  width: 50%;
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`

export const StylesContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #f8fafc;
  padding: 13px;
`

export const ButtonBold = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  margin-right: 10px;
`
export const Button2 = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  margin-right: 10px;
`
export const Button3 = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  margin-right: 10px;
`

export const Textarea = styled.textarea`
  color: #ffffff;
  background-color: transparent;
  border: none;
  margin: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
  outline: 0 !important;
  width: 80%;
`
export const ListEle = styled.li`
  list-style-type: none;
`
