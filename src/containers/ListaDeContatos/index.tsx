import React, { useState } from 'react'
import {
  Card,
  Flex,
  DivOptions,
  BotaoOpcaoDeletar,
  BotaoOpcaoEditar,
  BotaoSalvarEdicao,
  ContainerEdicao,
  InputEdicao,
  SolicitaInfo
} from './styles'
import Procurar from '../../components/Procurar'
import { UserInfo } from '../../types/userInfo'
import { updateUserInfo, setUserInfo } from '../../store/reducers/opcoesCard'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'

type ListaDeContatosProps = {
  userInfos: UserInfo[]
}

const ListaDeContatos: React.FC<ListaDeContatosProps> = () => {
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [termoPesquisa, setTermoPesquisa] = useState<string>('')
  const [editando, setEditando] = useState(false)
  const [formState, setFormState] = useState<UserInfo>({
    name: '',
    email: '',
    phone: ''
  })
  const userInfos = useAppSelector((state) => state.user.userInfos)
  const dispatch = useAppDispatch()

  const editarCard = (i: number, updatedUserInfo: UserInfo) => {
    dispatch(updateUserInfo({ index: i, updatedUserInfo }))
  }

  const deleteCard = (index: number) => {
    const updatedUserInfo = userInfos.filter((_, i) => index !== i)
    dispatch(setUserInfo(updatedUserInfo))
  }

  const quandoMudar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const quandoEditar = (index: number) => {
    setEditIndex(index)
    setFormState(userInfos[index])
    setEditando(true)
  }

  const quandoSalvar = (index: number) => {
    editarCard(index, formState)
    setEditIndex(null)
    setEditando(false)
  }

  const procuraCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermoPesquisa(event.target.value)
  }

  const cardFiltradoPesquisa = userInfos
    .filter(
      (card) =>
        card.name.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        card.email.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        card.phone.includes(termoPesquisa)
    )
    .sort((a, b) => {
      const pesquisaLow = termoPesquisa.toLowerCase()
      const aMatch = a.name.toLowerCase().includes(pesquisaLow) ? 1 : 0
      const bMatch = b.name.toLowerCase().includes(pesquisaLow) ? 1 : 0
      return bMatch - aMatch
    })

  return (
    <Flex>
      <Procurar
        procuraCard={termoPesquisa}
        cardFiltradoPesquisa={procuraCard}
      />
      {cardFiltradoPesquisa.length > 0 ? (
        cardFiltradoPesquisa.map((userInfo, index) => (
          <Card key={index}>
            {editIndex === index ? (
              <ContainerEdicao>
                <InputEdicao
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={quandoMudar}
                />
                <InputEdicao
                  type="text"
                  name="email"
                  value={formState.email}
                  onChange={quandoMudar}
                />
                <InputEdicao
                  type="text"
                  name="phone"
                  value={formState.phone}
                  onChange={quandoMudar}
                />
              </ContainerEdicao>
            ) : (
              <>
                <h2>{userInfo.name}</h2>
                <p>{userInfo.email}</p>
                <p>{userInfo.phone}</p>
              </>
            )}
            <DivOptions>
              <div>
                <BotaoOpcaoDeletar onClick={() => deleteCard(index)}>
                  Deletar
                </BotaoOpcaoDeletar>
              </div>
              <div>
                {editando && editIndex === index ? (
                  <BotaoSalvarEdicao onClick={() => quandoSalvar(index)}>
                    Salvar
                  </BotaoSalvarEdicao>
                ) : (
                  <BotaoOpcaoEditar onClick={() => quandoEditar(index)}>
                    Editar
                  </BotaoOpcaoEditar>
                )}
              </div>
            </DivOptions>
          </Card>
        ))
      ) : (
        <SolicitaInfo>Insira seus dados</SolicitaInfo>
      )}
    </Flex>
  )
}

export default ListaDeContatos
