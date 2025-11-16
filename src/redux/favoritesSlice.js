import { createSlice } from '@reduxjs/toolkit'

const savedFav = JSON.parse(localStorage.getItem('favorites') || '[]')

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { items: savedFav },
  reducers: {
    addFavorite(state, action) {
      const id = action.payload
      if (!state.items.includes(id)) {
        state.items.push(id)
        localStorage.setItem('favorites', JSON.stringify(state.items))
      }
    },

    removeFavorite(state, action) {
      const id = action.payload
      state.items = state.items.filter(item => item !== id)
      localStorage.setItem('favorites', JSON.stringify(state.items))
    },

    toggleFavorite(state, action) {
      const id = action.payload
      if (state.items.includes(id)) {
        state.items = state.items.filter(item => item !== id)
      } else {
        state.items.push(id)
      }
      localStorage.setItem('favorites', JSON.stringify(state.items))
    }
  }
})

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
