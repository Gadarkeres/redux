import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "./redux/countslice";
import NameReducer from "./redux/nameslice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    count: CountReducer,

    name: NameReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
