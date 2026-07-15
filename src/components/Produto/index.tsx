import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../../store/cartSlice'
import { Produto as ProdutoType } from '../../store/api'
import { paraReal } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
  favoritar: (produto: ProdutoType) => void
}

const ProdutoComponent = ({ produto, estaNosFavoritos, favoritar }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(adicionarAoCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
