import { ProcurarContato } from './styles'

type PesquisaProps = {
  procuraCard: string | number
  cardFiltradoPesquisa: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Procurar: React.FC<PesquisaProps> = ({
  procuraCard,
  cardFiltradoPesquisa
}) => {
  return (
    <ProcurarContato
      value={procuraCard}
      onChange={cardFiltradoPesquisa}
      type="text"
      placeholder="Buscar"
    />
  )
}

export default Procurar
