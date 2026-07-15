import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from './api'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existeNoCarrinho = state.items.find(
        (item) => item.id === produto.id
      )

      if (!existeNoCarrinho) {
        state.items.push(produto)
      } else {
        alert('Este produto já está no seu carrinho!')
      }
    }
  }
})

export const { adicionarAoCarrinho } = cartSlice.actions
export default cartSlice.reducer
