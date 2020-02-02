import styled from 'styled-components'
import { transitionCover } from '../../styles/animations'


const Link = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  color: #000;
`
const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
`
const Circle = styled.div`
    border: 1px solid #ddd;
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    border-radius: 50%;
    overflow: hidden;
    height: 75px;
    width: 75px;
    position:relative;
    &:before{
        content: '';
        height: 100%;
        width: 5px;
        background: rgba(0,0,0,.6);
        position: absolute;
        left: 90px;
        transform: rotate(24deg);
        filter: blur(18px);
        ${transitionCover(0.8)}
    }
`
export {
  Image,
  Circle,
  Link,
}
