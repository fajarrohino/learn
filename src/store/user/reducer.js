import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./action";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {
    addUser: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
