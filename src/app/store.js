import { configureStore } from "@reduxjs/toolkit";
import maxResultsSlice from "../features/maxResults/maxResultsSlice";
import tweetsSlice from "../features/tweets/tweetsSlice";

export const store = configureStore({
  reducer: {
    maxResults: maxResultsSlice,
    tweets: tweetsSlice
  }
})