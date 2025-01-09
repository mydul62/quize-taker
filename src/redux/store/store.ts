import { configureStore } from '@reduxjs/toolkit'
 import quizeReducer from '../features/quize/quizeSlize'

// Define the Redux store
export const store = configureStore({
  reducer: {
  quize :quizeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch