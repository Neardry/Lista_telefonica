import React, { useState } from 'react'
import { Adicionar, EstiloGlobal } from './styles'
import Aside from './containers/Aside'
import ListaDeContatos from './containers/ListaDeContatos'
import { Provider } from 'react-redux'
import store from './store'
import { UserInfo } from './types/userInfo'

function App() {
  const [isDisable, setIsDisable] = useState(false)
  const [userInfos, setUserInfos] = useState<UserInfo[]>([])

  const deleteCard = (index: number) => {
    setUserInfos((prevUserInfos) => prevUserInfos.filter((_, i) => index !== i))
  }

  const editarCard = (i: number, updateUserInfo: UserInfo) => {
    setUserInfos((prevUserInfos) =>
      prevUserInfos.map((userInfo, index) =>
        i === index ? updateUserInfo : userInfo
      )
    )
  }

  function apareceAside() {
    setIsDisable(!isDisable)
  }

  return (
    <Provider store={store}>
      <EstiloGlobal />
      {isDisable && <Aside setUserInfos={setUserInfos} />}
      <ListaDeContatos
        editarCard={editarCard}
        deleteCard={deleteCard}
        userInfos={userInfos}
      />
      <Adicionar onClick={apareceAside}>{isDisable ? 'X' : '+'}</Adicionar>
    </Provider>
  )
}

export default App
