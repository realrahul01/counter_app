import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    reset: (state)=>{
        state.count =0
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

//action
export const incrementAsync = (amount) => {  //action here sending function instead of object means there is middleware between
  //middleware 
  return (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 2000)
}
}

export default counterSlice.reducer