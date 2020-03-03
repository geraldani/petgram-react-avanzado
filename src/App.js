import React from 'react'
import { ListOfCategories } from './components/ListCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards, ListOfPhotoCardsWithQuey } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import styled from 'styled-components'
import { MdContentCopy as CopyIcon, MdDoneAll as CopiedIcon } from 'react-icons/md'
import { PhotoCardsWithQuery } from './containers/PhotoCardsWithQuery'

const Copy = () => {
  const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-content: center;
    cursor:pointer;
    width: 100px
`
  const Input = styled.input`
    color: darkgrey;
    cursor: initial;
      &:focus{
      outline: none;
      }
`

  const [copied, setCopied] = React.useState(false)
  const intupDom = React.useRef(null)
  const textInput = 'soy una linda cabecilla'
  const Icon = copied ? CopiedIcon : CopyIcon
  const textButton = copied ? 'Copiado' : 'Copiar'

  const copyText = () => {
    intupDom.current.select()
    document.execCommand('copy')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      intupDom.current.blur()
    }, 3000)
  }

  return (
    <div style={{ marginTop: '20px', zIndex: '5454' }}>
      <Input type="text" value={textInput} readOnly ref={intupDom} id='inputText' />
      <Button onClick={copyText}>
        {textButton}
        <Icon style={{ marginLeft: '10px' }} />
      </Button>
    </div>
  )
}
const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail') // aqui guardo el id que me viene de la url en detail=id
  return (
    <>
      {/*<Copy />*/}
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <PhotoCardsWithQuery id={detailId}/>
          : <>
              <ListOfCategories />
              <ListOfPhotoCardsWithQuey categoryId={3} />
            </>
      }

    </>
  )
}

export default App
