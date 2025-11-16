// import { createSlice } from '@reduxjs/toolkit'


// const saved = localStorage.getItem('theme') || 'light'


// const themeSlice = createSlice({
// name: 'theme',
// initialState: { mode: saved },
// reducers: {
// toggle(state) {
// state.mode = state.mode === 'light' ? 'dark' : 'light'
// localStorage.setItem('theme', state.mode)
// },
// setTheme(state, action) {
// state.mode = action.payload
// localStorage.setItem('theme', state.mode)
// }
// }
// })


// export const { toggle, setTheme } = themeSlice.actions
// export default themeSlice.reducer







import { createSlice } from '@reduxjs/toolkit'

const saved = localStorage.getItem('theme') || 'light'

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: saved },
  reducers: {
    toggle(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.mode)
    },
    setTheme(state, action) {
      state.mode = action.payload
      localStorage.setItem('theme', state.mode)
    }
  }
})

export const { toggle, setTheme } = themeSlice.actions
export default themeSlice.reducer
