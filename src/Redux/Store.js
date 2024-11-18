import { configureStore, combineReducers } from "@reduxjs/toolkit";

import screenSlice from "./Slice/screenNameSlice";

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

import UserStatusSlice from "./Slice/UserStatusSlice";
import DriverProfile from "./Slice/DriverProfile";
import VehicleRegistrationSlice, {
  vehicleInfo,
} from "./Slice/VehicleRegistrationSlice";
import vehicleInfoSlice from "./Slice/vehicleInfoSlice";
import NumberSlice from "./Slice/NumberSlice";

const rootReducer = combineReducers({
  screen: screenSlice,
  status: UserStatusSlice,
  number: NumberSlice,
  vehicleInfo: vehicleInfoSlice,
  option: OptionSlice,
  profile: profileSlice,
  driver: DriverProfile,
  vehicle: VehicleRegistrationSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["index","screen"],
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
