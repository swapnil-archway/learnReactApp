import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
  newsList: [],
};

const newsSlice = createSlice({
  initialState,
  name: "news",
  reducers: {
    newsRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    newsSuccess(state, action) {
      state.isLoading = false;
      state.newsList = action.payload.data.data;
      state.data = action.payload.data;
      state.error = null;
    },
    newsNextPageSuccess(state, action) {
      state.isLoading = false;
      state.newsList = state.news.concat(action.payload.data.data);
      state.data = action.payload.data;
      state.error = null;
    },
    newsError(state, action) {
      state.isLoading = false;
      state.error = action.payload.data;
    },
  },
});

export const { newsRequest, newsSuccess, newsNextPageSuccess, newsError } =
  newsSlice.actions;

export default newsSlice.reducer;
