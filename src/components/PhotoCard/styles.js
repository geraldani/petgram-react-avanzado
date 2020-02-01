import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animations'

const ImageContainer = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    img{
        box-shadow: 10px 14px rgba(0, 0, 0, .2);
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
        ${fadeIn()}
        &#img6{object-position: 100% 0;}
    }
`

const Button = styled.button`
    display: flex; 
    align-items: center;
    padding-top: 8px;    
    & svg {
        margin-right: 4px;
    }
    &:hover{
        cursor: pointer;
    }
`

const Container = styled.article`
    width: 90%;
    margin: 20px auto;
    min-height: 286px;
`
export {
  Container,
  Button,
  ImageContainer
}
