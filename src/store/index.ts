import { configureStore } from "@reduxjs/toolkit";
import actorsSlice from "./reducers/actorsSlice";
import modalSlice from "./reducers/modalSlice";
import photosSlice from "./reducers/photosSlice";
import markersSlice from "./reducers/markersSlice";
const store = configureStore({
  reducer: {
    actors: actorsSlice,
    modal: modalSlice,
    photos: photosSlice,
    markers: markersSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
