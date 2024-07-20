import { createGlobalStyle, styled } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
  }
`
export const Adicionar = styled.button`
  background-color: #000000;
  border-radius: 36px;
  color: #fff;
  width: 68px;
  height: 68px;
  position: absolute;
  right: 90px;
  bottom: 35px;
  font-size: 24px;
  border: 3px solid #ccc;
  cursor: pointer;
  transition: transform ease-out 100ms;
  position: fixed;

  &:hover {
    transform: scale(1.2);
    transition: transform ease-in 100ms;
  }
`
