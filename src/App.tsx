import { useState } from 'react'
import {
  useGetProdutosQuery,
  Produto as ProdutoType,
  produtosLocais
} from './store/api'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

export type Produto = ProdutoType

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

function App() {
  const { data, isLoading } = useGetProdutosQuery()
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  // Se 'data' existir, usamos ele; caso contrário, usamos a lista local vazia ou cheia
  const produtos: Produto[] = data ? data : produtosLocais

  const favoritar = (produto: Produto) => {
    if (favoritos.find((f) => f.id === produto.id)) {
      const favoritosSemOProduto = favoritos.filter((f) => f.id !== produto.id)
      setFavoritos(favoritosSemOProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  // Usamos a constante 'produtos' que já está garantida como Array pelo TypeScript
  if (isLoading && produtos.length === 0) {
    return <h5>Carregando produtos...</h5>
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
        />
      </div>
    </>
  )
}

export default App
