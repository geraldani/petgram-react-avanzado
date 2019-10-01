import styled, { css } from 'styled-components'
import { moveIn, moveOut } from '../../styles/animations'

export const style = {
  ul: styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    padding-bottom: 15px;
    ${props => !props.isFirst && css`
        background-color: white;
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 400px;
        z-index: 1;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,.3);
        padding: 5px;
        transform: scale(.7);
        ${props.fixedInOut
          ? css` 
            top: -10px;
            ${moveIn(0.7)}`
         : css`
            top: -120px;
            ${moveOut(0.4)}`
        }
    `}
`,
  li: styled.li`
    padding: 0 8px;
`,
  div: styled.div`
    width: 100%;
    margin-bottom: 20px;
`
}
