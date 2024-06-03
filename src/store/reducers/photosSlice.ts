import { createSlice } from "@reduxjs/toolkit";
import data from "../../mock.json";

type Photo = {
  id: number;
  src: string;
  alt: string;
};

type PhotosState = {
  photos: Photo[];
};

const initialState: PhotosState = {
  photos: data.photos,
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
});

export default photosSlice.reducer;
