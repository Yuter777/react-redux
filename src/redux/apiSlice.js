import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asinxron foydalanuvchilarni olish
export const fetchUsers = createAsyncThunk("api/fetchUsers", async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
