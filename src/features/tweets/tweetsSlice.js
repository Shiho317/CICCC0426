import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { findTweets } from "./findTweets"

const FETCH_TWEETS = "FETCH_TWEETS"

export const fetchTweetsThunk = createAsyncThunk(
  FETCH_TWEETS,
  async (params, thunkAPI) => {
    return await findTweets(params.searchValue, params.maxResults)
  }
)

const initialState = {
  tweets: [],
  isLoading: false,
  error: null
};

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  extraReducers: {
    [fetchTweetsThunk.pending]: (state) => {
      state.isLoading = true;
      state.error = null
    },
    [fetchTweetsThunk.fulfilled]: (state, {payload}) => {
      state.isLoading = false
      state.tweets = payload
      state.error = null
    },
    [fetchTweetsThunk.rejected]: (state) => {
      state.isLoading = false
      state.error = 'Error'
    }
  }
})

export default tweetsSlice.reducer