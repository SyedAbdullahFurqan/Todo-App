    import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

const initialState = {
value:0,
  task:[{id:nanoid(),text:""}],
  editing:""
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
      multiply: (state) => {
      state.value *= 2
    },
    
      reset: (state) => {
      state.value =0
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

Todolist: (state, action) => {

  state.task.push({ id:nanoid(), text: action.payload, completed: false });
    },
edit: (state, action) => {

const index=  state.task.findIndex((todo,id) => todo.id === action.payload);
state.editing= state.task[index].text
   console.log(edit)
   },
   delets: (state, action) => {
state.task=state.task.filter((tass)=> tass.id !== action.payload)
    console.log(action)
   },
  },
})

// Action creators are generated for each case reducer function
export const { increment,edit,delets, decrement, multiply , incrementByAmount,reset ,Todolist} = counterSlice.actions

export default counterSlice.reducer