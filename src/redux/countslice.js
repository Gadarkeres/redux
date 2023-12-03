import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    Count: 0
}
const Count = createSlice({
    name: 'count',
    initialState:initialState,
    reducers:{
        incrementCount: (state,action) => {
            state.Count = state.Count + 1 
        },
        decrement: (state,action) => {
            state.Count = state.Count - 1 
        },
    }
})

export default Count.reducer
export const {incrementCount, decrement} = Count.actions