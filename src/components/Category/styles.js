import styled from 'styled-components'

const a = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`
const img = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
`
export const style = {
  a,
  img
}
