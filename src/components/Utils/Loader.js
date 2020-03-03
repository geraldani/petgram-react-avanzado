import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
  div{
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${props => props.color};
    animation: ${fadeIn} 1.2s linear infinite;
    &:nth-child(1) {
      top: 6px;
      left: 6px;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      top: 6px;
      left: 26px;
      animation-delay: -0.4s;
    }
    &:nth-child(3) {
      top: 6px;
      left: 45px;
      animation-delay: -0.8s;
    }
    &:nth-child(4) {
      top: 26px;
      left: 6px;
      animation-delay: -0.4s;
    }
    &:nth-child(5) {
      top: 26px;
      left: 26px;
      animation-delay: -0.8s;
    }
    &:nth-child(6) {
      top: 26px;
      left: 45px;
      animation-delay: -1.2s;
    }
    &:nth-child(7) {
      top: 45px;
      left: 6px;
      animation-delay: -0.8s;
    }
    &:nth-child(8) {
      top: 45px;
      left: 26px;
      animation-delay: -1.2s;
    }
    &:nth-child(9) {
      top: 45px;
      left: 45px;
      animation-delay: -1.6s;
    }
  }
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p{
    font-size: 13px;
    color: #555;
  }
`

export const Loader = ({ color = 'black', size = '64px' }) => (
  <Container>
    <StyledLoader color={color} size={size}>
      {
        [...Array(9)].map(() => <div key={Math.random()}/>)
      }
    </StyledLoader>
    <p>Cargango...</p>
  </Container>
)
