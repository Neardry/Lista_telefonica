import React, { useState } from 'react'
import {
  AsideContainer,
  DivAside,
  ItemAside,
  Inputs,
  Labels,
  BotaoEnviar
} from './styles'
import { UserInfo } from '../../types/userInfo'
import { useAppDispatch } from '../../store/hooks/hooks'
import { addUserInfo } from '../../store/reducers/opcoesCard'

const Aside = () => {
  const [formState, setFormState] = useState<UserInfo>({
    name: '',
    email: '',
    phone: ''
  }) //inputs com as infos digitadas pelo user

  const dispatch = useAppDispatch()

  const quandoMudar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value
    }))
  }

  const telefoneFormatado = (value: string) => {
    const cleaned = value.replace(/\D/g, '') //Retira todos os caracteres extras (\D corresponde a qualquer caracter que não seja um dígito e g após o fechamento do metacaractere informa que deve seguir para a toda a string g = global)
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/) //verifica se os caracteres encaixam nessa expressão (\d informa que DEVE ser um dígito)

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}` //utiliza os grupos de captura acima (sendo que match[0] é a string cleaned)
    } else {
      return value
    }
  }

  const quandoMudarTelefone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const numeroFormatado = telefoneFormatado(value)

    setFormState((prevFormState) => ({
      ...prevFormState,
      phone: numeroFormatado
    }))
  }

  const quandoEnviar = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(addUserInfo(formState)) //Atualiza o array das infos que o Card utiliza
    setFormState({
      name: '',
      email: '',
      phone: ''
    }) //Reseta todos os inputs
  }

  return (
    <AsideContainer>
      <DivAside>
        <form onSubmit={quandoEnviar}>
          <ItemAside>
            <Labels htmlFor="name">Nome Completo</Labels>
            <Inputs
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={quandoMudar}
            />
          </ItemAside>
          <ItemAside>
            <Labels htmlFor="email">E-mail</Labels>
            <Inputs
              id="email"
              name="email"
              type="email"
              required
              value={formState.email}
              onChange={quandoMudar}
            />
          </ItemAside>
          <ItemAside>
            <Labels htmlFor="phone">Telefone</Labels>
            <Inputs
              id="phone"
              name="phone"
              type="tel"
              required
              value={formState.phone}
              onChange={quandoMudarTelefone}
            />
          </ItemAside>
          <BotaoEnviar type="submit">Enviar</BotaoEnviar>
        </form>
      </DivAside>
    </AsideContainer>
  )
}

export default Aside
