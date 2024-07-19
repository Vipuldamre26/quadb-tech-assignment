import { createSlice } from "@reduxjs/toolkit";

let oldData;

const addData = () => {

        let checkData = localStorage.getItem('item');
  
        if (checkData === null) {
            localStorage.setItem('item', JSON.stringify([]));
        }
        else {
            oldData = JSON.parse(localStorage.getItem('item'));
        }
  
        return [...oldData];
  
}

const dataSlice = createSlice({
    name: 'data',
    initialState: { data: addData() },
    reducers: {
        setData: (state, action) => {
            state.data = warehouseData
        }
    }
})

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;