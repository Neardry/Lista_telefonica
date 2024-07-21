import { Adicionar, EstiloGlobal } from './styles'
import Aside from './containers/Aside'
import ListaDeContatos from './containers/ListaDeContatos'
import { useAppDispatch, useAppSelector } from './store/hooks/hooks'
import { aparece } from './store/reducers/aside'

const MyComponent = () => {
  const dispatch = useAppDispatch()
  const asideVisivel = useAppSelector((state) => state.aside)
  const userInfos = useAppSelector((state) => state.user.userInfos)

  return (
    <>
      <EstiloGlobal />
      {asideVisivel && <Aside />}
      <ListaDeContatos userInfos={userInfos} />
      <Adicionar onClick={() => dispatch(aparece())}>
        {asideVisivel ? 'X' : '+'}
      </Adicionar>
    </>
  )
}

export default MyComponent
