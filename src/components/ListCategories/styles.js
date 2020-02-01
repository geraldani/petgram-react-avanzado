import styled, { css } from 'styled-components'
import { moveIn, moveOut } from '../../styles/animations'

const Items = styled.ul`
    display: flex;
    overflow: auto;
    width: 100%;
    padding-bottom: 15px;
`
const ItemsFloating = styled.ul`
  display: flex;
  overflow: auto;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 500px;
  z-index: 1;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,.3);
  padding: 5px;
  transform: scale(.8);
  ${props => props.showFloating
    ? css` 
      top: 10px;
      ${moveIn(0.5, 'linear')}`
    : css`
      top: -150px;
      ${moveOut(0.2, 'linear')}`
  }
`
const Container = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

const Item = styled.li`
    padding: 0 8px;
`
const ErrorMessage = styled.p`
  width: 90%;
  margin: auto;
  font-size: 14px;
  font-weight: 100;
  color: #d82323;
`
export {
  Items,
  Container,
  Item,
  ItemsFloating,
  ErrorMessage
}
