import { createSlice } from "@reduxjs/toolkit";




const taskSlice=createSlice({
    name:"task",
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            state.push(action.payload);
        },
        editTask: (state, action) => {
            const { index, newText } = action.payload;
            state[index] = newText;
          },
          deleteTask: (state, action) => {
            return state.filter((_, i) => i !== action.payload);
          },
    }
})


export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;