import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 1293px;
`
export const ContainerEdicao = styled.div`
  width: 270px;
  height: 150px;
  margin: 0 auto;
  margin-top: 48px;
`

export const InputEdicao = styled.input`
  border-radius: 6px;
  padding: 12px;
  width: 280px;
`

export const Card = styled.div`
  margin-top: 82px;
  text-align: center;
  background-color: #85929e;
  border-radius: 12px;
  box-shadow: 0 4px 4px RGBA(0, 0, 0, 0.25);
  width: 764px;
  height: auto;
  color: #fff;
  padding-bottom: 20px;

  h2 {
    margin-top: 24px;
    margin-bottom: 6px;
  }

  p {
    margin: 6px;
    font-size: 24px;
    padding: 8px;
  }
`

export const DivOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const BotaoOpcao = styled.button`
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`

export const BotaoOpcaoDeletar = styled(BotaoOpcao)`
  background-color: red;
`

export const BotaoOpcaoEditar = styled(BotaoOpcao)`
  background-color: #efe65a;
`

export const BotaoSalvarEdicao = styled(BotaoOpcao)`
  background-color: green;
`
