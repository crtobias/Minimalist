
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
   blackmode:true,
}

export const defaultSlice = createSlice({
  name: "default",
  initialState,
  reducers: {

     blackModeChange: (state) => {
          state.blackmode = !state.blackmode;
        }


  },

  extraReducers: (builder) => {

 //EJEMPLOS
    // builder.addCase(fetchMenus.fulfilled, (state, action) => {
    //   state.menus = action.payload
    // })
    
  },
})

export const {
     //EJEMPLOS
//   agregarPlato,
blackModeChange
 
} = defaultSlice.actions

export default defaultSlice.reducer