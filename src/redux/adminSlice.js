import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asinxron admin ma'lumotlarini olish
export const fetchAdminData = createAsyncThunk(
  "admin/fetchAdminData",
  async () => {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdminData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAdminData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default adminSlice.reducer;
