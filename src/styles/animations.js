import { css, keyframes } from 'styled-components'

const fadeKeyframes = keyframes`
    from{
        filter: blur(5px);
        opacity: 0;
    }
    to{
        filter: blur(0);
        opacity: 1;
    }
`

const moveInKeyframes = keyframes`
    from{
        top: -120px
    }
    to{
        top: -10px
    }
`
const moveOutKeyframes = keyframes`
    from{
        top: -10px
    }
    to{
        top: -120px
    }
`

const transitionCoverKeyframes = keyframes`
    from{
        left: -20px;
    }
    to{
        left: 90px;
    }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeKeyframes} ${type};`

export const moveIn = (time = 1) =>
  css`animation: ${time}s ${moveInKeyframes} ease;`

export const moveOut = (time = 1) =>
  css`animation: ${time}s ${moveOutKeyframes} ease;`

export const transitionCover = (time = 1) =>
  css`animation: ${time}s ${transitionCoverKeyframes} linear infinite;`
