import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const AsideContainer = styled.aside`
  position: fixed;
  width: 20%;
  min-width: 262px;
  background-color: #85929e;
  height: 100vh;
  animation: ${fadeIn} 1s ease-in-out forwards;
`

export const DivAside = styled.div`
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 83px;
  margin-top: 76px;
`

export const ItemAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Inputs = styled.input`
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  height: 48px;
  max-width: 296px;
  margin-left: 20px;
  padding: 16px;
  margin-right: 12px;
`

export const Labels = styled.label`
  font-size: 16px;
  margin: 8px;
  font-weight: bold;
`

export const BotaoEnviar = styled.button`
  background-color: #3fc354;
  border-radius: 8px;
  width: 96px;
  height: 52px;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  margin-top: 85%;
  margin-left: 40%;
`
