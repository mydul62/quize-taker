import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Iquize {
  value: number
}

const initialState: Iquize = {
  value: 0,
}

export const QuizeSlice = createSlice({
  name: 'quize',
  initialState,
  reducers:{
  
  }
})


export const { increment, decrement, incrementByAmount } = QuizeSlice.actions

export default QuizeSlice.reducer