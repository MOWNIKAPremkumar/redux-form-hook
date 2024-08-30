import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  },
  reducers: {
    updateFormData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    resetFormData: (state) => {
      state.data = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      };
    }
  }
});

export const { updateFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
