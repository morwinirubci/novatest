import { createSlice } from "@reduxjs/toolkit";
import data from "../../mock.json";

type Marker = {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
};

type MarkersState = {
  markers: Marker[];
};

const initialState: MarkersState = {
  markers: data.markers,
};

const markersSlice = createSlice({
  name: "markers",
  initialState,
  reducers: {},
});

export default markersSlice.reducer;
