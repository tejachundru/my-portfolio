// Slice for user details (name, email, etc.)
import { createSlice } from '@reduxjs/toolkit';

export type DetailsState = {
  name: string;
  email: string;
};

const initialState: DetailsState = {
  name: '',
  email: '',
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
});

export default detailsSlice.reducer;
