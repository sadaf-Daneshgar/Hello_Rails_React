import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomGreeting = createAsyncThunk(
  'greetings/fetchRandomGreeting',
  async () => {
    const response = await fetch('/greetings/random');
    if (!response.ok) {
      throw new Error('Failed to fetch.');
    }
    const data = await response.json();
    return data.greeting;
  },
);

const initialState = {
  greeting: '',
  isLoading: false,
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;