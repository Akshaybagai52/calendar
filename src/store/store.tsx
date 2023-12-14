// // import { configureStore } from '@reduxjs/toolkit'
// // import authSlice from '../features/slices/authSlice'

// // export const store = configureStore({
// //   reducer: {
// //     user:authSlice
// //   },
// // })
// import storage from 'redux-persist/lib/storage';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
//   persistStore,
// } from 'redux-persist';
// import { configureStore } from '@reduxjs/toolkit';
// import appReducer from './app.slice';
// export const store = configureStore({
//     app: persistReducer<ReturnType<typeof appReducer>>(
//         {
//           key: 'app',
//           storage,
//         },
//         appReducer
//       ),
// })

// // // Infer the `RootState` and `AppDispatch` types from the store itself
// // export type RootState = ReturnType<typeof store.getState>
// // // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// // export type AppDispatch = typeof store.dispatch

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const persistor = persistStore(store);

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app.slice';

const persistConfig = {
 key: 'app',
 storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
 reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
