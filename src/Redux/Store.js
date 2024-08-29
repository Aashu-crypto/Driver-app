import { configureStore, combineReducers } from "@reduxjs/toolkit";
import indexSlice from "./Slice/indexSlice";
import screenSlice from "./Slice/screenNameSlice";
import docSlice from "./Slice/DoctorDetailSlice";
import profileSlice from "./Slice/ProfileDataSlice";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import OptionSlice from "./Slice/OptionSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

import articleIdSlice from "./Slice/ArticleIdSlice";
import UserStatusSlice from "./Slice/UserStatusSlice";
const rootReducer = combineReducers({
  screen: screenSlice,
  status: UserStatusSlice,
  index: indexSlice,
  doc: docSlice,
  option: OptionSlice,
  profile: profileSlice,
  articleId: articleIdSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["screen", "index",  "article"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
