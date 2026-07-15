import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
}

const produtosLocais: Produto[] = [
  {
    id: 1,
    nome: 'Tênis Adidas Coreracer',
    preco: 219.9,
    imagem:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=60'
  },
  {
    id: 2,
    nome: 'Camisa Nike Dry Park VII',
    preco: 79.9,
    imagem:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=300&auto=format&fit=crop&q=60'
  },
  {
    id: 3,
    nome: 'Shorts Puma IndividualLIGA',
    preco: 119.9,
    imagem:
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=300&auto=format&fit=crop&q=60'
  },
  {
    id: 4,
    nome: 'Bola de Futebol Penalty',
    preco: 139.9,
    imagem:
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=300&auto=format&fit=crop&q=60'
  }
]

export const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produto[], void>({
      query: () => 'ebac_sports',
      transformResponse: (response: Produto[]) => response || produtosLocais
    })
  })
})

export const { useGetProdutosQuery } = produtosApi
export { produtosLocais }
