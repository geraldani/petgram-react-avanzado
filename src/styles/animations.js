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
        top: -110px
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
        top: -110px
    }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeKeyframes} ${type};`

export const moveIn = (time = 1) =>
  css`animation: ${time}s ${moveInKeyframes} ease;`

export const moveOut = (time = 1) =>
  css`animation: ${time}s ${moveOutKeyframes} ease;`
