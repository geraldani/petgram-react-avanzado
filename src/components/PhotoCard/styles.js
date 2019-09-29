import styled from 'styled-components'

export const style = {
  div: styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`,
  img: styled.img`
    box-shadow: 010px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    &#img6{
        object-position: 100% 0;
    }
`,
  button: styled.button`
    display: flex; 
    align-items: center;
    padding-top: 8px;    
    & svg {
        margin-right: 4px;
    }
`
}
