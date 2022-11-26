import { createSlice } from "@reduxjs/toolkit";

export const authorSlice = createSlice({
    name:'user',
    initialState:{:{aname:'',bname:'',price:''}},
    reducers:{
        changeauthor:(state, action)=>{
            state.value = action.payload
        }
    }
})
export const {changeauthor} = authorSlice.actions;
export default authorSlice.reducer;