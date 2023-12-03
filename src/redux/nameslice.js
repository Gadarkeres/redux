import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:'',
    password: '',
}

 const Name = createSlice({
    name:'nameInput',
    initialState:initialState,
    reducers:{
        changeName:(state,action) => {
            return{...state, 
                name: action.payload.user.name, password: action.payload.user.password
            }
           
        }
        
    }

})

export default Name.reducer
export const {changeName} = Name.actions




