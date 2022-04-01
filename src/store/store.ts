import { combineReducers, configureStore } from "@reduxjs/toolkit";
import columnReducer from "./reducers/columnReducer";
import cardReducer from "./reducers/cardReducer";
import commentReducer from "./reducers/commentReducer";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authorReducer from "./reducers/authorReducer";

const rootReducer = combineReducers({
  column: columnReducer,
  card: cardReducer,
  comment: commentReducer,
  author: authorReducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
